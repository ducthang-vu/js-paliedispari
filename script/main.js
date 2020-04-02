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
    // A function modelling a "odds and evens" game bewteen user and computer; parameter "option" being either 0 or 1 for user's choise of "even" or "odd"; and parameter "number" being the number chosen by the user from 0 to 5.

    var score = [option, number] 
    console.log(score)

    score.push(Math.floor(Math.random() * 5 + 1))
    if ((score[1] + score[2]) % 2 == score[0]) {
        console.log('player wins')
    } else {
        console.log('player loses, computer wins')
    }
    console.table(score)
}


/**************/
/* MAIN SCRIPT */
/*************/
var palindromeButton = document.getElementById('play-palindrome')
var oddEvensButton = document.getElementById('play-oddEvens')
var palindrome_input = document.getElementById('word')

// EVENTS
palindromeButton.addEventListener('click', 
    function() {
        word = palindrome_input.value
        var text_to_user

        if (palindrome(word) == -1) {
            text_to_user = 'Empty string cannot be accepted. Please try again'
        } else if (palindrome(word)) {
            text_to_user = 'YES, the word "' + word + '" is a palindrome!'
        } else {
            text_to_user = 'NO, the word "' + word + '" is not a palindrome'
        }

        document.getElementById('palindrome-output').innerHTML = text_to_user
        palindrome_input.value = ''
        palindrome_input.focus()
    } 
)

oddEvensButton.addEventListener('click', 
    function() {
        do {
            var choise = parseInt(prompt('Odds and evens game!\n STEP 1 - Enter 0 to choose EVEN, or 1 for ODD'))
        
            if (choise == 0 || choise == 1) {break}
            else {}
                alert('Please do enter a number 0 for EVEN or 1 for ODD.')
        } while (true)
        
        do {
            var number = parseInt(prompt('Odds and evens game!\n STEP 2 - Enter a number from 1 to 5(included).'))
        
            if (number < 1 || number > 5 || isNaN(number)) {
                alert('Please do enter a number from 1 to 5 (included).')
            } else {break}
        } 
        while (true) 

        oddsEvens_game(choise, number) 
    }
)