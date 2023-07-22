// REGISTER VALIDATE
function checker() {
    try{
     let firstName = document.getElementById('first_name').value;
     let lastName = document.getElementById('last_name').value;
     let birthDate = document.getElementById('birth_date').value;
     let email = document.getElementById('email').value;
     let confirmEmail = document.getElementById('confirm_email').value;
     let password = document.getElementById('password').value;
     let confirmPassword = document.getElementById('confirm_password').value;
     let mobileNumber = document.getElementById('mobile_number').value;
 
     let regexName = /^[A-Za-z]+$/;
     let birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;
     let passwordRegex = /^(?=.*[A-Z])(?=.*\d{2,})(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,32}$/;
     let mobileNumberRegex = /^\d{10}$/;
     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
     let userData = {
         FirstName: firstName,
         LastName: lastName,
         BirthDate: birthDate,
         Email: email,
         Password: password,
         MobileNumber: mobileNumber
     };
 
 
 
 
 
 
     if (!regexName.test(firstName) || !regexName.test(lastName)) {
         console.log('First name and last name should contain only letters.');
         return false;
     }
     
             if (!birthDateRegex.test(birthDate)  ) {
                 console.log('Invalid birth date format. use YYYY-mm-dd format');
                 return false;
             }
             
             
             if (!emailRegex.test(email)) {
                 console.log('Invalid email format.');
                 return false;
             }
 
             
             if (email !== confirmEmail) {
                 console.log('Emails do not match.');
                 return false;
             }
 
           
            
             if (!passwordRegex.test(password)) {
                 console.log('Password should start with a capital letter, contain at least two numbers, one special character, and be 8 to 32 characters long.');
                 return false;
             }
 
             if (password !== confirmPassword) {
                 console.log('Passwords do not match.');
                 return false;
             }
 
    
           
             if (!mobileNumberRegex.test(mobileNumber)) {
                 console.log('Mobile number should contain exactly 10 digits.');
                 return false;
             }
        
             
             localStorage.setItem("userData",JSON.stringify(userData))
             
             return true;
         }
         catch (error) {
             console.error("An error occurred while parsing JSON:", error.message);
             return null; 
           }
             
         }
     
     
 
// LOGIN FUNCTION
function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


    var storedUserData = JSON.parse(localStorage.getItem('userData'));

   
    if (storedUserData) {
       
        if (email === storedUserData.Email && password === storedUserData.Password) {
            alert('Login successful!');
        } else {
            alert('Invalid email or password.');
        }
    } else {
        alert('No user data found. Please register first.');
    }
}



//References
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

let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
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

];
const HTMl = [
    {
        id: "0",
        question: "HTML STANDS FOR ",
        options: ["HYP", "Mandarin", "English", "German"],
        correct: "Mandarin",
    },
    {
        id: "1",
        question: "HTML STANDS FOR ",
        options: ["HYP", "Mandarin", "English", "German"],
        correct: "Mandarin",
    },
    {
        id: "2",
        question: "HTML STANDS FOR ",
        options: ["HYP", "Mandarin", "English", "German"],
        correct: "Mandarin",
    },
    {
        id: "3",
        question: "HTML STANDS FOR ",
        options: ["HYP", "Mandarin", "English", "German"],
        correct: "Mandarin",
    },
    {
        id: "4",
        question: "HTML STANDS FOR ",
        options: ["HYP", "Mandarin", "English", "German"],
        correct: "Mandarin",
    },
    {
        id: "5",
        question: "HTML STANDS FOR ",
        options: ["HYP", "Mandarin", "English", "German"],
        correct: "Mandarin",
    }

];

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
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

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
};




