let buttonlogin = document.querySelector("#buttonmain1");
    let startquiz = document.getElementById('startquiz')
    let LogOut= document.querySelector("#LogOut");
    let welc= document.querySelector('#welcome');
    let skill= document.querySelector('#skills');
    let dataisloged = JSON.parse(localStorage.getItem('isloged'));
        console.log(dataisloged);
    let userData = JSON.parse(localStorage.getItem('userData'));
    let userattempt = JSON.parse(localStorage.getItem('userattempt'))

    buttonlogin.addEventListener('click', _ => {
        window.location.href = "./Register/Login.html";
    });
    let buttonsignup = document.querySelector("#buttonmain2");
    buttonsignup.addEventListener('click', _ => {
        window.location.href = "./Register/register.html";
    });
    
    // when click on logout
    LogOut.addEventListener('click', _ => {
        console.log('testt');
        dataisloged=false;
        localStorage.setItem("isloged", JSON.stringify(false));
        buttonlogin.style.display = "inline-block";
        buttonsignup.style.display = "inline-block";
        startquiz.style.display = "none";
        LogOut.style.display = "none";
        welc.textContent = "Welcome in Quee";
        skill.textContent = `We are excited to discover your skills,The exam comprises 10 questions, with only 3 minute for  response.!`
    })
    //defult
  
    if (dataisloged == true){
        console.log('testt');
        buttonlogin.style.display = "none";
        buttonsignup.style.display = "none";
        startquiz.style.display = "inline-block";
        LogOut.style.display = "inline-block";
        document.body.classList.add('logged-in');
        
        //writing on homepage
        welc.textContent = "Welcome " + userData.FirstName + " " + "to Quee";
        skill.textContent = `We are excited to discover your skills in(${userData.Position}),The exam comprises 10 questions, with only 3 minute for each response.!`
      
    // startquiz.addEventListener('click', _ => {
    //     window.location.href = "./Quizz/quiz.html";
    
    // });
    document.getElementById('startquiz').addEventListener('click', () => {
        window.location.href = "./Quizz/quiz.html";
    });
    
    if (userData.userattempt == true){
        console.log(userattempt);
        startquiz.style.display = "none";
        welc.textContent = "Thank you " + userData.FirstName ;
        skill.textContent = `Good luck.... ,We will contact you shortly .!`
      
    }
   LogOut.addEventListener('click', _ => {

        window.location.href = "./index.html";})}
 