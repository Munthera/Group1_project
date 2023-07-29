// JavaScript code
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

let quizPosition = storedData ? storedData.position : 'html'; // Provide a default value if 'userData' doesn't exist in localStorage

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
];} else if (quizPosition === 'css'){
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
     options: [`< link rel="stylesheet" type="text/css" href="mystyle.css" >`, `< style src="mystyle.css" >`, `< stylesheet>mystyle.css</stylesheet n>`, `none`],
     correct: `< link rel="stylesheet" type="text/css" href="mystyle.css" >`,
    },


    {
     id: "2",
     question: "  Where in an HTML document is the correct place to refer to an external style sheet?",
     options: ["At the end of the document", "In the < head > section  ", "In the < body > section","none"],
     correct: "In the < head > section",
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
        question: "What is the correct CSS syntax for making all the < p > elements bold? ",
        options: [`< p style="text-size:bold;" >`, `p {text-size:bold;}`, `p {font-weight:bold;}`, `< p style="font-size:bold;" >< /p >`],
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
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["< js >","< javascript >","< script >","< scripting >"],
        correct: "< script >",
       },
       {
        id: "1",
        question: "How to write an IF statement in JavaScript?",
        options: ["if i = 5","if i == 5 then","if (i == 5)","if i = 5 then"],
        correct: "if (i == 5)", 
        
       },
       {
        id: "2",
        question: "Where is the correct place to insert a JavaScript?",
        options: ["Both the < head > section and the < body > section are correct","The < body > section","The <head> section","none"],
        correct: "Both the < head > section and the < body > section are correct",
       },
       {
        id: "3",
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()","function = myFunction()","function:myFunction()","none"],
        correct: "function myFunction()",
       },
       {
        id: "4",
        question: "What is the correct way to write a JavaScript array?",
        options: [`var colors = ["red", "green", "blue"]`,`var colors = (1:"red", 2:"green", 3:"blue")`,`var colors = "red", "green", "blue"`,`var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")`],
        correct: `var colors = ["red", "green", "blue"]`,
       },
       {
        id: "5",
        question: "How does a WHILE loop start?",
        options: ["while i = 1 to 10","while (i <= 10; i++)","while (i <= 10)","none"],
        correct: "while (i <= 10)",
       },
       {
        id: "6",
        question: "Which operator is used to assign a value to a variable?",
        options: ["=","*","-","/"],
        correct: "=",
       },
       {
        id: "7",
        question: "How does a FOR loop start?",
        options: ["for (i = 0; i <= 5; i++)","for (i <= 5; i++)","for (i = 0; i <= 5)","for i = 1 to 5"],
        correct: "for (i = 0; i <= 5; i++)",
       },

       {
        id: "8",
        question: "How do you declare a JavaScript variable?",
        options: ["v carName;","variable carName;","var carName;","none"],
        correct: "var carName;",
       },
       {
        id: "9",
        question: `How do you write "Hello World" in an alert box?`,
        options: [`alert("Hello World");`,`msg("Hello World");`,`msgBox("Hello World");`,`alertBox("Hello World");`],
        correct: `alert("Hello World");`,
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

// ... (rest of the code) ...

// Checker Function to check if option is correct or not
function checker(userOption) {
  // ... (rest of the existing code) ...
}

// ... (rest of the existing code) ...

// check result page if it displayed or not
let resultDisplayed = false;
nextBtn.addEventListener("click", () => {
  // ... (rest of the existing code) ...
});

// ... (rest of the existing code) ...

// initial setup
function initial() {
  // ... (rest of the existing code) ...
}

// when the user clicks on the start button
startButton.addEventListener("click", () => {
  // ... (rest of the existing code) ...
});

// hide quiz and display the start screen
window.onload = () => {
  // ... (rest of the existing code) ...
};
