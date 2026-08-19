// Get elements from the DOM

const loginForm = document.getElementById("loginForm");
const loginUsername = document.getElementById("loginUsername");
const loginPassword = document.getElementById("loginPassword");
const loginMessage = document.getElementById("loginMessage");

const signupForm = document.getElementById("signupForm");
const signupMessage = document.getElementById("signupMessage");

const pageTitle = document.getElementById("pageTitle");


// Login form event

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (loginUsername.value === "" || loginPassword.value === "") {

        loginMessage.textContent = "Please enter your username and password.";
        loginMessage.style.color = "red";

    } else {

        loginMessage.textContent = "Welcome to PhotoEditor!";
        loginMessage.style.color = "green";

    }

});


// Sign-up form event

signupForm.addEventListener("submit", function(event) {

    event.preventDefault();

    signupMessage.textContent = "Registration successful!";
    signupMessage.style.color = "green";

});


// Show / Hide login password

document.getElementById("showLoginPassword")
    .addEventListener("click", function() {

        if (loginPassword.type === "password") {

            loginPassword.type = "text";
            this.textContent = "Hide Password";

        } else {

            loginPassword.type = "password";
            this.textContent = "Show Password";

        }

    });


// Show / Hide sign-up password

document.getElementById("showSignupPassword")
    .addEventListener("click", function() {

        const signupPassword =
            document.getElementById("signupPassword");

        if (signupPassword.type === "password") {

            signupPassword.type = "text";
            this.textContent = "Hide Password";

        } else {

            signupPassword.type = "password";
            this.textContent = "Show Password";

        }

    });


// DOM manipulation

pageTitle.addEventListener("click", function() {

    pageTitle.textContent = "📸 Welcome to PhotoEditor!";

});