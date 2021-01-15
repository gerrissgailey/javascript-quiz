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

    }
    // selectedOption.checked = false;
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    if (currentQuestion == totalQuestions) {
        endScore.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return;
    }
    currentQuestion++;
    loadNextQuestion();
}
console.log(score);
console.log(totalQuestions);
// startQuestions(currentQuestion);



loadNextQuestion();
// add event listener on start
generateBtn.addEventListener("click", setStage);







//     for (var i = 0; i < questions.length; i++) {
//         // var displayQuestion = document.getElementById("question")
//         displayQuestion = (questions[i].title);
//         // console.log(displayQuestion);
//         // if (askQuestion == questions[i].answer) {
//             // score++;var startQ = questions[i];
//         // console.log(startQ);


//         displayQuestion.textContent = (displayQuestion[i]);
//         console.log(displayQuestion);
//         // }    
//         ans1.textContent = questions[i].choices[i];
//         console.log(ans1);
//         // ans2.textContent = questions[i].choices[1];
//         // ans3.textContent = questions[i].choices[2];
//         // ans4.textContent = questions[i].choices[3];        
//     }
// };

// var selectedOption = document.querySelector('input[type=button]:onclick');




// var listenForAnswer = document.querySelectorAll("button[type=button]")
// console.log(listenForAnswer);

// // for (var i = 0; i < listenForAnswer.length; i++) {
// listenForAnswer.forEach.addEventListener("click", toNextQuestion);
// // add event listener for answer selection
// // }
// console.log(listenForAnswer);

// function toNextQuestion () {
//     if (listenForAnswer == questions[i].answer) {
//         score++
//     }
// }
// console.log(score);
// console.log(listenForAnswer);

