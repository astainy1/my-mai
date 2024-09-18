
// eventListener for Login Form
const errorMessage = document.getElementById('errorMessage');
const logInForm = document.getElementById('loginForm');
const loginUserName = document.getElementById('loginUserName');
const loginPassword = document.getElementById('loginUserPassword');

logInForm.addEventListener('submit', (event) =>{

    //Preventing default behavior of the submit button
    event.preventDefault();

    //Get the value of the login input fields.
    const userLoginData = {
        loginUserName1 :     loginUserName.value,
        loginUserPassword1 : loginPassword.value
    };

    //Get user data from string that is stored into localstorage and convert it back into an object to be served and validated.
    const userData = JSON.parse(localStorage.getItem('Users'));
    
    //Validating user data; if user data exists and matches current input.
    if(userData && userData.userName === userLoginData.loginUserName1){

        // validating user password
        if(userData.userPassword === userLoginData.loginUserPassword1){

            //redirect user to home page after successful login.
            window.location.href = "../html/index.html"
        }
        else{

            // alert("Wrong input");
            errorMessage.innerHTML = "Invalid Password";
        }
    }

    else{
        errorMessage.innerHTML = "User does not exist!";
        
        // setTimeout(() => {
        //     errorMessage.style.opacity = 1;
        // }, 10);

    }

    // console.log(userData);

});

