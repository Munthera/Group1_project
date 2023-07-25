// LOGIN FUNCTION
function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let error = document.getElementById('Error');

    let storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData) {
        if (email === storedUserData.Email && password === storedUserData.Password) {
            // alert('login successful')
            return true;
        } else {
            error.textContent = "*Invalid email or password.";
            return false;
        }
    } else {
        error.textContent = "*No user data found. Please register first.";
        return false;
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

        isloged = true;
        localStorage.setItem("isloged", JSON.stringify(isloged));
        console.log("login success");
        window.location.href = "../index.html";
    }
});
