// LOGIN FUNCTION
function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    let storedUserData = JSON.parse(localStorage.getItem('userData'));
    
    
    if (storedUserData) {
        
        if (email === storedUserData.Email && password === storedUserData.Password) {
            // alert('login succesfull')
            return true
        }
         else {
            alert('Invalid email or password.');
            return false
        }
            } 
            else {
        alert('No user data found. Please register first.');
        return false
    }
    

    
}

// login btn navgate to homepage


let buttonlogin = document.getElementById("btnlogin");
let isloged = false;
buttonlogin.addEventListener('click', (event) => {
    event.preventDefault();
    if (!login()) {
        isloged = false;
        console.log("Login failed.");
    } else {
        isloged=true;
        localStorage.setItem("isloged",JSON.stringify(isloged))
        console.log("login succes");
        window.location.href = "../index.html";
    }
});