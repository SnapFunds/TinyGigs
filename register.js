// register.js
import firebaseConfig from './config.js';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Register a new user
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("User registered:", userCredential.user);
            window.location.href = "personalize.html"; // Redirect to personalization page
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});
