

// Validating register form
function checker() 
{
    
     let firstName = document.getElementById('first_name').value;
     let lastName = document.getElementById('last_name').value;
     let birthDate = document.getElementById('birth_date').value;
     let email = document.getElementById('email').value;
     let confirmEmail = document.getElementById('confirm_email').value;
     let password = document.getElementById('password').value;
     let confirmPassword = document.getElementById('confirm_password').value;
     let mobileNumber = document.getElementById('mobile_number').value;
     let position = document.getElementById('position').value;
    // regex for inputs
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
         MobileNumber: mobileNumber,
         position: position
     };
 
 
 
 
 
     //checking firstname
        if (!regexName.test(firstName) || !regexName.test(lastName)) {
         console.log('First name and last name should contain only letters.');
         return false;
        }
            //check birth
             if (!birthDateRegex.test(birthDate)  ) {
                 console.log('Invalid birth date format. use YYYY-mm-dd format');
                 return false;
             }
             
             // check email 
             if (!emailRegex.test(email)) {
                 console.log('Invalid email format.');
                 return false;
             }
 
             //check email
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
             alert('register succesful')
             return true;
}
   
           

 
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


let buttonlogin = document.querySelector("#btnlogin");
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





      
