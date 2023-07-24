let buttonlogin = document.querySelector("#buttonmain1");
    let startquiz = document.querySelector("#startquiz");
    let LogOut= document.querySelector("#LogOut");
    let welc= document.querySelector('#welcome');
    let skill= document.querySelector('#skills');
    let dataisloged = JSON.parse(localStorage.getItem('isloged'));
        console.log(dataisloged);
    let userData = JSON.parse(localStorage.getItem('userData'));
    buttonlogin.addEventListener('click', _ => {
        window.location.href = "./Register/Login.html";
    });

    let buttonsignup = document.querySelector("#buttonmain2");

    buttonsignup.addEventListener('click', _ => {
        window.location.href = "./Register/register.html";
    });
    
    // when click on logout
    LogOut.addEventListener('click', _ => {
        dataisloged=false;
        localStorage.setItem("isloged", JSON.stringify(false));
        buttonlogin.style.display = "inline-block";
        buttonsignup.style.display = "inline-block";
        startquiz.style.display = "none";
        LogOut.style.display = "none";
        welc.textContent = "Welcome in Quee";
        skill.textContent = `We are excited to discover your skills,The exam comprises 5 questions, with only 10 seconds for each response.!`
    })
    //defult
    if (dataisloged == true){
    
        buttonlogin.style.display = "none";
        buttonsignup.style.display = "none";
        startquiz.style.display = "inline-block";
        LogOut.style.display = "inline-block";
        //writing on homepage
        welc.textContent = "Welcome " + userData.FirstName + " " + "to Quee";
        skill.textContent = `We are excited to discover your skills in(${userData.position}),The exam comprises 5 questions, with only 10 seconds for each response.!`

    }
    startquiz.addEventListener('click', _ => {
        window.location.href = "./Quizz/quiz.html";
    });
    
   LogOut.addEventListener('click', _ => {
        window.location.href = "./index.html";
    });