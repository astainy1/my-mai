// Testing connection
// alert("Connected successfully!");

//Declearing variable for form input field.
const errorMessage = document.getElementById('errorMessage');
const oldEmail = document.getElementById('oldEmail');
const requestPassword = document.getElementById('requestPassword');

//Creating eventListener to be triggered when form is submitted.
requestPassword.addEventListener('submit', (e) =>{
    //Preventing the defualt behivoir of the submit button.
    e.preventDefault();

    //creating an object to store user input.
    const userOldEmail = {
        email : oldEmail.value
    };

    //Testing the input into the console.
    console.log(userOldEmail);

    //Retrieve user data from localstorage and then convert it into object.
    const retrieveData = JSON.parse(localStorage.getItem('Users'));

    //Validating user email with the retrieved data from localStorage
    if (retrieveData && retrieveData.userEmail === userOldEmail.email) {

        //if email is the same as the retrieved email from localstorage, use is redirected to create new password.
        window.location.href="../html/createpwd.html";

        // Else user receive an error message.
    }else{
        errorMessage.innerHTML = "Email does not exist.";
    }

    // Testing to get the retrived data into the console.
    console.log(retrieveData);

});