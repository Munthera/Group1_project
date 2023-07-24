
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

let quizPosition = storedData.position
console.log(quizPosition);

let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
var quizArray = []
//Questions html / css / js
if (quizPosition === 'html'){
    quizArray = [
    {
        id: "0",
        question: "Which is the most widely spoken language in the world?",
        options: ["Spanish", "Mandarin", "English", "German"],
        correct: "Mandarin",
    },
    {
        id: "1",
        question: "Which is the only continent in the world without a desert?",
        options: ["North America", "Asia", "Africa", "Europe"],
        correct: "Europe",
    },
    {
        id: "2",
        question: "Who invented Computer?",
        options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
        correct: "Charles Babbage",
    },
    {
        id: "3",
        question: "What do you call a computer on a network that requests files from another computer?",
        options: ["A client", "A host", "A router", "A web server"],
        correct: "A client",
    },
    {
        id: "4",
        question: "Hardware devices that are not part of the main computer system and are often added later to the system.",
        options: ["Peripheral", "Clip art", "Highlight", "Execute"],
        correct: "Peripheral",
    },
    {
        id: "5",
        question: "The main computer that stores the files that can be sent to computers that are networked together is:",
        options: ["Clip art", "Mother board", "Peripheral", "File server"],
        correct: "File server",
    }
    
];} 
else if (quizPosition === 'css'){
    quizArray = [
       {
           id: "0",
           question: " What does CSS stand for?",
           options: ["Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets  "],
           correct: "Cascading Style Sheets",
       },

       {
        id: "1",
        question: "What is the correct HTML for referring to an external style sheet? ",
        options: [`<link rel="stylesheet" type="text/css" href="mystyle.css">  `, `<style src="mystyle.css">`, `<stylesheet>mystyle.css</stylesheet>`, `none`],
        correct: `<link rel="stylesheet" type="text/css" href="mystyle.css">`,
       },


       {
        id: "2",
        question: "  Where in an HTML document is the correct place to refer to an external style sheet?",
        options: ["At the end of the document", "In the <head> section  ", "In the <body> section","none"],
        correct: "In the <head> section",
       },
      
       {
        id: "3",
        question: " Which HTML attribute is used to define inline styles?",
        options: ["class", "style", "font", "styles"],
        correct: "style",
       },

       {
        id: "4",
        question: " Which is the correct CSS syntax?",
        options: ["body:color=black;", "body {color: black;} ", "{body;color:black;}", "{body:color=black;}"],
        correct: "body {color: black;}",
       },

       {
        id: "5",
        question: " Which CSS property is used to change the text color of an element? ",
        options: ["fgcolor", "text-color", "color","none"],
        correct: "color",
       },

       {
        id: "6",
           question: "What is the correct CSS syntax for making all the <p> elements bold? ",
           options: [`<p style="text-size:bold;">`, `p {text-size:bold;}`, `p {font-weight:bold;}     
           `, `<p style="font-size:bold;"></p>
           `],
           correct: "p {font-weight:bold;}",
       },
    
       {
        id: "7",
           question: "How do you make each word in a text start with a capital letter?",
           options: ["You can't do that with CSS", "text-transform:capitalize  ", "transform:capitalize", "text-style:capitalize"],
           correct: "text-transform:capitalize",
       },

       {
        id: "8",
           question: ` How do you display a border like this:

           The top border = 10 pixels
           The bottom border = 5 pixels
           The left border = 20 pixels
           The right border = 1pixel?`,
           options: ["border-width:10px 20px 5px 1px;", "border-width:10px 5px 20px 1px;", "border-width:10px 1px 5px 20px; ", "border-width:5px 20px 10px 1px"],
           correct: "border-width:10px 1px 5px 20px;",
       },
 


       {
        id: "9",
           question: " What is the default value of the position property? ",
           options: ["static", "fixed", "relative", "absolute"],
           correct: "static",
       }
    ];}
       else if (quizPosition === 'js'){
        quizArray = [
            {
                id: "0",
                question: "HTML STANDS FOR ",
                options: ["HYP", "Mandarin", "English", "German"],
                correct: "Hyper Markup Language",
            },
            {
                id: "1",
                question: "HTML STANDS FOR ",
                options: ["HYP", "Mandarin", "English", "German"],
                correct: "Hyper Markup Language",
            },
            {
                id: "2",
                question: "HTML STANDS FOR ",
                options: ["HYP", "Mandarin", "English", "German"],
                correct: "Hyper Markup Language",
            },
            {
                id: "3",
                question: "HTML STANDS FOR ",
                options: ["HYP", "Mandarin", "English", "German"],
                correct: "Hyper Markup Language",
            },
            {
                id: "4",
                question: "HTML STANDS FOR ",
                options: ["HYP", "Mandarin", "English", "German"],
                correct: "Hyper Markup Language",
            },
            {
                id: "5",
                question: "HTML STANDS FOR ",
                options: ["HYP", "Mandarin", "English", "German"],
                correct: "",
            }
        
        ];}
  
   
  

//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
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
}

//Checker Function to check if option is correct or not
// Disable the "Next" button initially


// Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
  
    // Disable all options once the user selects one
    options.forEach((element) => {
      element.disabled = true;
    });
  
    // If user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
      userOption.classList.add("correct");
      scoreCount++;
    } else {
      userOption.classList.add("incorrect");
      // For marking the correct option
      options.forEach((element) => {
        if (element.innerText == quizArray[questionCount].correct) {
          element.classList.add("correct");
        }
      });
    }
  
    // Store the selected option for current question
    selectedOption = userOption;
  
    // Enable the Next button
    nextBtn.disabled = false;
  

    clearInterval(countdown);
  }
// check result page if it displayed or not
  let resultDisplayed = false;
  nextBtn.addEventListener(
    "click",
    (displayNext = () => {
      selectedOption = null;
  
      nextBtn.disabled = true;

      let question = document.getElementsByClassName("container-mid")[questionCount];
      let options = question.querySelectorAll(".option-div");
      options.forEach((element) => {
        element.disabled = false;
      });
       // Check if it's the last question
    if (questionCount == quizArray.length - 1) {
      // hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      // user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + quizArray.length + " questions";

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

          resultContainer.appendChild(questionDiv);
        }

        scoreContainer.appendChild(resultContainer);
        resultDisplayed = true; // Set the flag to true to indicate that the result page has been displayed
      }
    } else {
        // Clear the selected option before displaying the next question
        selectedOption = null;
  
        // ... Your existing code ...
  
        // Increment questionCount to display the next question
        questionCount += 1;
  
        // ... Your existing code ...
  
        // Disable the Next button again until the user selects an answer
        nextBtn.disabled = true;
      }
    })
  );
 
//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
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