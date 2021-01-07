// Home Page
// <div id="container">
// start button
var generateBtn = document.querySelector("#start");
// add event listener on start
generateBtn.addEventListener("click", startQuestions);

// global variables
var trueAnswers = ["answer 1", "answer 2", "answer 3", "answer 4", "answer 5"]

function startQuestions()

// document.createElement('h1') = question1
// document.createElement('button1') = answer1
// document.createElement('button2') = answer2
// document.createElement('button3') = answer3
// document.createElement('button4') = answer4
// function that rewrites questions and answers
// QUESTIONS AND ANSWERS CHANGE
quiz = [
    {
        q: 'How to do?',
        1: 'no',
        2: 'yes',
        3: 'hello',
        4: 'yes',
        5: 'no'
    }
]

let i = 0;
quiz[i]

// document.createElement('submit') = submit


// function
function submitAnswer(ans) {
    if (trueAnswers[]) {
        // if answer === right then next question
    } else {
    // if answer === wrong then timer - 5 seconds then next question (count minus 5 seconds)
    }
}

// if lastAnswer then allow saving of high score and initials
// i++
// SUBMIT NEVER CHANGES

// timer
var countdown = function(time) {
    for (var i = time; i > 0; i--) {
        if (i === 0) {
            clearInterval;
        } else {
        return (i);
        }
    }
}
// count variable = 75 sec - (initialized at the start of each run/quiz - could be 75 sec for instance)
// if count === 0 stop timer (clearInterval())

// then allow them to save initials and score
// initials require input

// localstorage to save initials and score and display initials and score

// when initials and score are saved display initials and score
// button to jump to high scores from start page

let arrObj = JSON.parse(localStorage.getItem('highScore')) || [];


count = 75;
// (this timer is found in activity 8)
const timer = setInterval(function() {
    count--
    if(count===0) {
        clearInterval(timer)
        writeHighScore();
    }
}, 1000)

clearInterval(timer)

let playerScore = {
    initials: document.getElementById('initials').nodeValue,
    score: count
};

arrObj.push(playerScore)

localStorage.setItem('highScore', JSON.stringify(arrObj))




// ***** should have a minimum of 5 questions - display 1 question at a time