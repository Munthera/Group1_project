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
    let birthDate = document.getElementById("birth_date").value;
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
    let mobileNumberRegex = /^\d{10}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let error = document.getElementById("Error");
    let userData = {
        FirstName: firstName,
        LastName: lastName,
        BirthDate: birthDate,
        Email: email,
        Password: password,
        MobileNumber: mobileNumber,
        Position: position,
    };


    //checking firstname
    if (!regexName.test(firstName) || !regexName.test(lastName)) {
        error.textContent = "*First name and last name should contain only letters.";
        return false;
    }
    //check birth
    if (!birthDateRegex.test(birthDate)) {
        error.textContent = "*Invalid birth date format. use YYYY-mm-dd format";
        return false;
    }

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

    // If the form is valid, store the user data and show a success message
    
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Registration successful");
    return true;
});