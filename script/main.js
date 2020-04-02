/************/
/* A script:
    1- prompting user to enter a word and returning whether such word is palindrome; and

    2- a odds and evens game between user and computer.
/************/

console.log('main.js is working')

/**************/
/* FUNCTIONS */
/*************/
function palindrome(word) {
    // A function accepting a string and returning true if the string is palindrome, otherwise false. Return -1 if string is empty

    if (word == '') {
       return -1
    }
    else {
        var reverse = ''
        for (var i = word.length -1; i >= 0; i--) {
            reverse += word[i]
        }

        if (word.toLowerCase() == reverse.toLowerCase()) {
            return true
        } else {
            return false
        }
    }
}


function oddsEvens_game(option,number) {
    // A function modelling a "odds and evens" game bewteen user and computer; parameter "option" being either 0 or 1 for user's choise of "even" or "odd"; and parameter "number" being the number (from 1 to 5, included) chosen by the user. Return an array, being array[0] the number chosen randomly (from 1 to 5, included) by the computer; and array[1] = 0 if the player wins, otherwise 1. Return -1 if paramter are invalid.
    if ((option != 0 && option != 1) || (number < 1 || number > 5)) 
        {return -1}

    var score = [option, number] 

    score.push(Math.floor(Math.random() * 5 + 1))

    if ((score[1] + score[2]) % 2 == score[0]) {
        score.push(0)
    } else {
        score.push(1)
    }
    
    return [score[2], score[3]]
}


/**************/
/* MAIN SCRIPT */
/*************/
var palindromeButton = document.getElementById('play-palindrome')
var oddEvensButton = document.getElementById('play-oddEvens')
var palindrome_input = document.getElementById('word')
var player_number = [document.getElementById('n1'), document.getElementById('n2'), document.getElementById('n3'), document.getElementById('n4'), document.getElementById('n5')]


// EVENTS
palindromeButton.addEventListener('click', 
    function() {
        word = palindrome_input.value
        var text_to_user

        if (palindrome(word) == -1) {
            text_to_user = 'ERROR! Empty string cannot be accepted. Please try again'
        } else if (palindrome(word)) {
            text_to_user = 'YES, the word "' + word + '" is a palindrome!'
        } else {
            text_to_user = 'NO, the word "' + word + '" is not a palindrome.'
        }

        document.getElementById('palindrome-output').innerHTML = text_to_user
        palindrome_input.value = ''
        palindrome_input.focus()
    } 
)


oddEvensButton.addEventListener('click', 
    function() {
        var choise 
        var number 
        var result = []
        var text_to_user

        // Odd or even
        if (document.getElementById('oddEven1').checked) {
            choise = 1
        } else {
            choise = 0
        }

        // Number chosen by player
        for (i = 0; i < 5; i++) {
            if (player_number[i].checked) {
                number = parseInt(player_number[i].value)
            break
            }
        }

        result = oddsEvens_game(choise, number)
        if (result[1] == 0) {
            text_to_user = 'The computer chose ' + result[0] + '.<br>The total is: ' + (parseInt(number) + result[0]) + '.<br><br>You win!'
        } else {
            text_to_user = 'The computer chose ' + result[0] + '.<br>The total is: ' + (parseInt(number) + result[0]) + '.<br><br>You loses!'
        }

        document.getElementById('oddsEvens-output').innerHTML = text_to_user
    }
)