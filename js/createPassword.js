// Testing connection
// alert("connected successfully!");

// Declearing variables to target all input fields.
const errorMessage = document.getElementById('errorMessage');
const createPasswordForm = document.getElementById('createPassword');
const newPassword1 = document.getElementById('newPassword');
const confirmPassword2 = document.getElementById('confirmPassword');

//Adding eventListener to be triggered when form is submitted.
createPasswordForm.addEventListener('submit', (event4) => {
    // Preventing submit button default behavior.
    event4.preventDefault();

    //Creating an object to store the value the input field.
    const changePassword = {
        newPassword : newPassword1.value,
        confirmPassword : confirmPassword2.value
    };

    //Retrieving user data from LocalStorage.

    const keyData = 'Users';
    let updateData = localStorage.getItem(keyData);

    updateData = updateData ? JSON.parse(updateData) : {};

    // let retrieveData = JSON.parse(localStorage.getItem('Users'));

    //Checking if new password is the same as old password else password does not match.
    if(changePassword && changePassword.newPassword === changePassword.confirmPassword){
        
        // Changing the value of the old password to the new password
        updateData.userPassword = changePassword.confirmPassword;
        localStorage.setItem(keyData, JSON.stringify(updateData));

        // Displaying success message.
        errorMessage.style.color = 'green';
        errorMessage.innerHTML = "Password successfully changed!";

        // Re-directing user to login page
        window.location.href = "../html/login.html";

    }else{
        // Diplaying error message incase both new (new and confirm) password do not match.
        errorMessage.innerHTML = "Password does not match!";
    }
    
    // //Testing input
    // console.log(changePassword);

    // //Testing retrieve data.
    // console.log(retrieveData); 

});