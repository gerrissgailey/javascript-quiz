var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;
var timer;
var count = 75;
var displayTime = document.getElementById("display-time")

var startScreenEl = document.getElementById("start-screen");
var questionsEl = document.getElementById("quiz");
var displayQuestion = document.getElementById("question");
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");
var currentScore = document.getElementById("current-score")
var endScore = document.getElementById("final-score");
var generateBtn = document.getElementById("start");


clearInterval(timer);

function setStage() {
    startScreenEl.setAttribute("class", "hide");
    questionsEl.setAttribute("class", "show")
    timer = setInterval(function () {
        displayTime.textContent = count;
        count--;
        if (count === 0) {
            clearInterval(timer);
            // writeHighScore();
        }
    }, 1000)
};

function startQuestions(questionIndex) {
    var runQuestions = questions[questionIndex];
    // console.log(runQuestions);
    displayQuestion.textContent = (questionIndex + 1) + '. ' + runQuestions.question;
    // console.log(displayQuestion);
    ans1.textContent = runQuestions.choice1;
    ans2.textContent = runQuestions.choice2;
    ans3.textContent = runQuestions.choice3;
    ans4.textContent = runQuestions.choice4;
    // console.log(ans1);
    // console.log(ans2);
    // console.log(ans3);
    // console.log(ans4);
};

var selectedOption = "";
let btns = document.querySelectorAll('button.ans');

for (i of btns) {
    i.addEventListener('click', function () {
        selectedOption = this.innerHTML;
        console.log(selectedOption);
        updateScore();
    });
}

function loadNextQuestion() {
    
    startQuestions(currentQuestion);
}


function updateScore() {
    // console.log(questions[currentQuestion]);
    if (questions[currentQuestion].answer == selectedOption) {
        score += 10;
        currentScore.textContent = score;
        console.log(score);
        // alert("Correct! + 10 Points!");
    } else {
        // if (questions[currentQuestion].answer == !selectedOption) {
            score -= 5;
            currentScore.textContent = score;
            count -= 5;
        }
    if (currentQuestion == totalQuestions - 1) {
        questionsEl.setAttribute("class", "hide");
        endScore.setAttribute("class", "show");
        endScore.textContent = 'Your Score: ' + score;
        clearInterval(timer);
        return;
    }
    // console.log(questionsEl);
    // console.log(endScore);
    currentQuestion++;
    loadNextQuestion();
}

console.log(score);
console.log(totalQuestions);
    // startQuestions(currentQuestion);
    
    
    
loadNextQuestion();
// add event listener on start
generateBtn.addEventListener("click", setStage);



