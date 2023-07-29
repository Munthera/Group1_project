const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = form.elements['firstName'].value;
  const lastName = form.elements['lastName'].value;
  const birthDate = form.elements['birthDate'].value;
  const email = form.elements['email'].value;
  const password = form.elements['password'].value;
  const confirmPassword = form.elements['confirmPassword'].value;
  const mobileNumber = form.elements['mobileNumber'].value;
  const position=form.elements['position'].value;

  // 1. Check if the name has just letters.
  const nameRegex = /^[A-Za-z]+$/;
  if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
	
	return false;
  }

  // 2. Determine the birth date input and check for it in the right way
  // (You can add date validation here if required).

  // 3. Check the email structure by regular expression and use error handling
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
	
	return false;
  }

  // 5. Password validation
  if (password !== confirmPassword) {
	return false;
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]{2,})(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,32}$/;
  if (!passwordRegex.test(password)) {
	
	return false;
  }
  let mobileregx = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
  if (!mobileregx.test(mobileNumber)){
    return false;
  }
  

  // 6. Mobile number validation
  // (The pattern attribute on the input element will handle this validation)

  // If all validations pass, you can proceed with the form submission here.
  // For example, you can use AJAX to submit the form data to your server.

 // Store the user data in localStorage
 let userData = {
	FirstName: firstName,
	LastName: lastName,
	BirthDate: birthDate,
	Email: email,
	Password: password,
	MobileNumber: mobileNumber,
	Position: position,
	userattempt: null
};
  
  // Convert the userData object to a JSON string and store it in localStorage
  localStorage.setItem("userData", JSON.stringify(userData));
  
  // Reset the form after successful submission
  form.reset();
  
  // Redirect to the login page
  window.location.href = "./Login.html";})