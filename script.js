// variables for quiz functionality
var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;
var timer;
var count = 60;
var displayTime = document.getElementById("display-time")
var startScreenEl = document.getElementById("start-screen");
var questionsEl = document.getElementById("quiz");
var currentScore = document.getElementById("current-score")
var generateBtn = document.getElementById("start");
var viewScores = document.getElementById("view-scores");
var endScore = document.getElementById("final-score");
var submitButton = document.getElementById("submit");
var backToStart = document.getElementById("back-start");
var resetScores = document.getElementById("reset-scores");

// variables for question values
var displayQuestion = document.getElementById("question");
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");

// variables for local storage
var highScores = document.getElementById("high-scores");
var printInitials = document.getElementById("initials-stored");
var printScore = document.getElementById("score-stored");
var recordScore = [];

// reset the timer
clearInterval(timer);

// initialize from local storage
init();

// pull data from local storage to display on high scores page
function renderScores() {
    // Clear high score elements and update
    printInitials.innerHTML = "";
    printScore.innerHTML = "";
  
    // Render a new li for each high score
    for (var i = 0; i < recordScore.length; i++) {
      var displayScore = recordScore[i];
        
      var liInitials = document.createElement("li");
      liInitials.textContent = displayScore.userInitials;
      liInitials.setAttribute("data-index", i);

      var liScore = document.createElement("li");
      liScore.textContent = displayScore.userScore;
      liScore.setAttribute("data-index", i);
  
      // appends high score info to high scores page
      printInitials.appendChild(liInitials);
      printScore.appendChild(liScore);
    }
}

// display the quiz and start the timer once "start" is clicked
function setStage() {
    startScreenEl.setAttribute("class", "hide");
    questionsEl.setAttribute("class", "show")
    timer = setInterval(function () {
        displayTime.textContent = count;
        count--;
        if (count < 0) {
            questionsEl.setAttribute("class", "hide");
            endScore.setAttribute("class", "show");
            clearInterval(timer);
            return;
        }
    }, 1000)
};

// cycle through the questions
function startQuestions(questionIndex) {
    var runQuestions = questions[questionIndex];
    // console.log(runQuestions);
    displayQuestion.textContent = (questionIndex + 1) + '. ' + runQuestions.question;
    // console.log(displayQuestion);
    ans1.textContent = runQuestions.choice1;
    ans2.textContent = runQuestions.choice2;
    ans3.textContent = runQuestions.choice3;
    ans4.textContent = runQuestions.choice4;
};

// listen for which answer button is clicked
var selectedOption = "";
let btns = document.querySelectorAll('button.ans');

for (i of btns) {
    i.addEventListener('click', function () {
        selectedOption = this.innerHTML;
        console.log(selectedOption);
        updateScore();
    });
}

// loads the next question in queue
function loadNextQuestion() {    
    startQuestions(currentQuestion);
}

// updates the score & ends the quiz after last question
function updateScore() {
    // if answer is correct, add 10 points
    if (questions[currentQuestion].answer == selectedOption) {
        score += 10;
        currentScore.textContent = score;
        console.log(score);
    } else {
        // if answer is wrong, subtract 5 seconds from timer
            count -= 5;
        }
        // when last question of quiz is answered
        if (currentQuestion == totalQuestions - 1) {
            questionsEl.setAttribute("class", "hide");
            endScore.setAttribute("class", "show");
            clearInterval(timer);
            return;
        }
    currentQuestion++;
    loadNextQuestion();
}
    
// console.log(score);
// console.log(totalQuestions);
    
loadNextQuestion();
    
// checks local storage for any existing values
function init() {
    // Parsing the JSON string to an object
    var retrieveScore = JSON.parse(localStorage.getItem("userSubmitted"));
    
    // if data is found in local storage, update the recordScore array with this data
    if (retrieveScore !== null) {
        recordScore = retrieveScore;
    }
}

// event listener to store user initials input
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var initialsStored = document.querySelector("#initials").value;
    var scoreStored = score;
    
    // make object from user submission
    var userSubmitted = {    
        userInitials: initialsStored,
        userScore: scoreStored
    };
    
    // push userSubmitted object to recordScore array
    recordScore.push(userSubmitted);
    
    // set new submission to local storage
    localStorage.setItem("userSubmitted", JSON.stringify(recordScore));
    highScores.setAttribute("class", "show");
    endScore.setAttribute("class", "hide");
    renderScores();

});

// event listener to start the quiz
generateBtn.addEventListener("click", setStage);

// event listener to view high scores
viewScores.addEventListener("click", function(event) {
    event.preventDefault();

    renderScores();

    highScores.setAttribute("class", "show");
    startScreenEl.setAttribute("class", "hide");
});

// event listener to return to start screen
backToStart.addEventListener("click", function(event) {
    event.preventDefault();

    startScreenEl.setAttribute("class", "show");
    highScores.setAttribute("class", "hide");
    displayTime.innerHTML = "";
    currentScore.innerHTML = "";
    currentQuestion = 0;
    count = 60;
    score = 0;
    loadNextQuestion();
});

// event listener to clear scores from local storage
resetScores.addEventListener("click", function(event) {
    event.preventDefault();

    printInitials.innerHTML = "";
    printScore.innerHTML = "";
    recordScore = [];
    localStorage.clear();
});
    