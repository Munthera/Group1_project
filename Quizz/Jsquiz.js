let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let storedData = JSON.parse(localStorage.getItem('userData'));
let quizPosition = storedData.Position
console.log(quizPosition);
let questionCount;
let scoreCount = 0;
let count = 11;
let timerInterval;
var quizArray = []
//timer

const totalTime = 180;


// --------- auto starting

//Questions html / css / js
if (quizPosition === 'html'){
    quizArray = [
    {
        id: "0",
        question: "What does HTML stand for?",
        options: ["home tool markup language", "hyperlinks and text markup language", "hyper text markup language", "none"],
        correct:  "hyper text markup language",
    },
    {
        id: "1",
        question: " Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed? ",
        options: ["alt", "src", "title", "longdesc"],
        correct: "alt",
    },
    {
        id: "2",
        question: " Choose the correct HTML element for the largest heading: ",
        options: [ "h1", "head", "header", "h6"],
        correct:   "h1",
    },
    {
        id: "3",
        question: "Choose the correct HTML element to define important text",
        options: ["< i >", "< b >", "< strong >", "< important >"],
        correct: "< strong >",
    },
    {
        id: "4",
        question: " Which of these elements are all <table> elements? ",
        options: ["< table >< tr >< tt >","< thead >< body >< tr >","< table >< tr >< td >","< table >< head >< tfoot >"],
        correct: "< table >< tr >< td >", 
      
    },
    {
        id: "5",
        question: "The HTML < canvas > element is used to:",
        options: ["display database records", "manipulate data in MySQL", "create draggable elements", "draw graphics"],
        correct: "draw graphics",
    },
    {
        id: "6",
        question: " Which HTML element defines navigation links? ",
        options: ["< nav >","< navigation >","< navigate >","none"],
        correct: "< nav >",
    },
    {
        id: "7",
        question: " What is the correct HTML element for playing audio files? ",
        options: ["< mp3 >","< sound >","< audio >","< mp4 >"],
        correct: "< audio >",
    },
    {
        id: "8",
        question: " How can you make a numbered list? ",
        options: ["< dl >","< ul >","< ol >","< list >"],
        correct: "< ol >", 
    },
    {
        id: "9",
        question: "Choose the correct HTML element to define emphasized text",
        options: ["< italic >","< em >","< i >","< b >"],
        correct: "< em >",
    }
];} 


// Initialize userData from local storage or create a new object if not present
let userData = JSON.parse(localStorage.getItem('userData')) || {};

// Add an "answers" property to the userData object if not already present
if (!userData.answers) {
    userData.answers = [];
}

//Restart Quiz
restart.addEventListener("click", () => {
    window.location.href='../index.html'
});
// Timer
const startTimer = () => {
    count = totalTime;
    timeLeft.innerHTML = `${count}s`;
  
    clearInterval(timerInterval);
  
    countdown = setInterval(() => {
      count--;
      const min =Math.floor(count / 60);
    const sec =Math.floor(count % 60);
      if (count <= 0) {
        clearInterval(countdown);
        displayResult();
      } else {
        timeLeft.innerHTML = `${min}:${sec<10?'0':''}${sec}s`;
      }
    }, 1000);
  };
  
  function displaytime(second){
    const min =Math.floor(second / 60);
    const sec =Math.floor(second % 60);
    timeH.innerHTML= `${min}:${sec<10?'0':''}${sec}`
    }
  
//Display quiz
let quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    // Hide the previous question card
    if (questionCount > 0) {
        quizCards[questionCount - 1].classList.add("hide");
    }
    // Show the current question 
    quizCards[questionCount].classList.remove("hide");
    
};

let selectedOption = null;
//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
            <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
            <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
            <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
            <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
        `;
        quizContainer.appendChild(div);
    }
    nextBtn.disabled = true;

    // Show the first question card
    quizDisplay(0);
}




// Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
  
    // Disable all options when the user selects one
    options.forEach((element) => {
      element.disabled = true;
    });
  
    // If user clicked answer == correct option store it  in object
    if (userSolution === quizArray[questionCount].correct) {
      userOption.classList.add("correct");
      scoreCount++;
    } else {
      userOption.classList.add("correct");
     
    }
  
    // Store the selected option for current question
    selectedOption = userOption;
    quizArray[questionCount].selected = userSolution;
    // save it to local 
    userData.answers[questionCount] = userSolution;
    // Save the updated userData to local 
    localStorage.setItem('userData', JSON.stringify(userData));
    // Enable the Next button
    nextBtn.disabled = false;
  

    // clearInterval(countdown);
  }
// check result page if it displayed or not
let resultDisplayed = false;
let userattempt = false;
function displayResult()
{
    displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");

        // Display the user score
        userScore.innerHTML =
            "Your score is " + scoreCount + " out of " + quizArray.length + " questions";
      scoreCount >= 5
        ? (userScore.style.color = "green")
        : (userScore.style.color = "red");

        // Display the result page only if it hasn't been displayed before
        if (!resultDisplayed) {
            let resultContainer = document.createElement("div");
            resultContainer.classList.add("result-container");
        
            for (let i = 0; i < quizArray.length; i++) {
                let questionDiv = document.createElement("div");
                questionDiv.classList.add("result-question");
        
                let questionNumber = document.createElement("p");
                questionNumber.classList.add("result-question-number");
                questionNumber.innerText = "Question " + (i + 1) + ":";
                questionDiv.appendChild(questionNumber);
                
                let questionText = document.createElement("p");
                questionText.classList.add("result-question-text");
                questionText.innerText = quizArray[i].question;
                questionDiv.appendChild(questionText);
                
                let correctAnswer = document.createElement("p");
                correctAnswer.classList.add("result-correct-answer");
                correctAnswer.innerText = "Correct Answer: " + quizArray[i].correct;
                questionDiv.appendChild(correctAnswer);
                
                // Display the user's selected answer
                let selectedAnswer = document.createElement("p");
                selectedAnswer.classList.add("result-selected-answer");
                selectedAnswer.innerText =
                    "Your Answer: " + (quizArray[i].selected ? quizArray[i].selected : "Not Attempted");
                questionDiv.appendChild(selectedAnswer);
        
                resultContainer.appendChild(questionDiv);
            }
            // reset timer
            
            scoreContainer.appendChild(resultContainer);
            resultDisplayed = true;
            userattempt=true;
            localStorage.setItem("userattempt", JSON.stringify(userattempt));
        }
    
}
nextBtn.addEventListener("click", () => {
    selectedOption = null;
    nextBtn.disabled = true;
    // clearInterval(countdown);
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    if (!countdown) {
        return;
    }
    options.forEach((element) => {
        element.disabled = false;
        element.classList.remove("correct", "incorrect"); // Reset the classes for the options
    });

    // Check if it's the last question
    if (questionCount == quizArray.length - 1) {
        // Hide the question container and display the score
       displayResult();
        
    } else {
        // Clear the selected option before displaying the next question
        selectedOption = null;
        questionCount += 1;
        countOfQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length + " Question";
        quizDisplay(questionCount);
        //start the timer
        // count = totalTime;
        // startTimer();
        
        // save it to local 
        localStorage.setItem('userData', JSON.stringify(userData));
        // Disable the Next button 
        nextBtn.disabled = true;
        
    }
    
});

 
//start setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = totalTime;
    startTimer();
    quizCreator();
    quizDisplay(questionCount);
}

// when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});


//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
    nextBtn.disabled = true;
};


// ------------------------------ main page


