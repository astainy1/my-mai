//Testing the connection between my Js and HTMl file.
// alert("Hello, I am connected.")

//Variable for targetting the signup form.
const signUpForm = document.getElementById('signUpForm');

// eventListener for SignUp Form.

// Declearing eventListener to be triggered when form is submitted.
signUpForm.addEventListener('submit', (e) => {

    //Preventing submit button default behavior.
    e.preventDefault();

    // Declearing variable for all signup input fields.
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    //Storing all variables into an object to get the value of each.
    const userDetails = {
        userName: username.value,
        userEmail: email.value,
        userPassword: password.value
    };

    //Loggin into the console for possible error.
    console.log(userDetails);

    //Storing user data into localStorage as a string.
    localStorage.setItem("Users", JSON.stringify(userDetails));

    //Redirecting valid signup user to login page.
    window.location.href="login.html";

    //Clearing form input field after submission
    signUpForm.reset();

});

