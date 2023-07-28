let registerBtn = document.querySelector("#reg");

// Validating register form
registerBtn.addEventListener('click', function (event) {
    event.preventDefault();
    let form = document.querySelector('form');
    if (!form.checkValidity()) {
        // إذا كان هناك حقول مطلوبة غير معبأة، عرض رسالة الخطأ وعدم تنفيذ الإجراء المتوقع
        let error = document.getElementById("Error");
        error.textContent = "*Please fill out all required fields.";
        return false;
    }

    let firstName = document.getElementById("first_name").value;
    let lastName = document.getElementById("last_name").value;
    //let birthDate = document.getElementById("birth_date").value;
    let email = document.getElementById("email").value;
    let confirmEmail = document.getElementById("confirm_email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;
    let mobileNumber = document.getElementById("mobile_number").value;
    let position = document.getElementById("position").value;

    // regex for inputs
    let regexName = /^[A-Za-z]+$/;
    let birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;
    let passwordRegex =
        /^(?=.*[A-Z])(?=.*\d{2,})(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,32}$/;
    let mobileNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let error = document.getElementById("Error");



    //checking firstname
    if (!regexName.test(firstName) || !regexName.test(lastName)) {
        document.getElementById("error-first-name").textContent = "*First name should contain only letters.";
        return false;
    }
    //check birth
    
    // check email
    if (!emailRegex.test(email)) {
        error.textContent = "*Invalid email format.";
        return false;
    }

    //check email
    if (email !== confirmEmail) {
        error.textContent = "*Emails do not match.";
        return false;
    }

    if (!passwordRegex.test(password)) {
        error.textContent = "*Password should start with a capital letter, contain at least two numbers, one special character, and be 8 to 32 characters long.";
        return false;
    }

    if (password !== confirmPassword) {
        error.textContent = "*Passwords do not match.";
        return false;
    }

    if (!mobileNumberRegex.test(mobileNumber)) {
        error.textContent = "*Mobile number should contain exactly 10 digits.";
        return false;
    }
    // date validate
    let currentDate = new Date();
    let birthDate = new Date(document.getElementById("birth_date").value);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let birthMonth = birthDate.getMonth();
    let currentMonth = currentDate.getMonth();
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age < 18) {
        document.getElementById("error-birth-date").textContent =  "*You must be at least 18 years old to register.";
        return false;
    }
    
   

    let userData = {
        FirstName: firstName,
        LastName: lastName,
        BirthDate: age,
        Email: email,
        Password: password,
        MobileNumber: mobileNumber,
        Position: position,
        userattempt: null
    };
    //store the user data 
    
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "./Login.html"
    return true;
});
