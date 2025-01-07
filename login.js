// login.js
import firebaseConfig from './config.js';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google login
document.getElementById("google-login").addEventListener("click", function () {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            console.log("User signed in with Google:", result.user);
            window.location.href = "personalize.html";
        })
        .catch((error) => {
            console.error("Error during Google login:", error);
        });
});

// Email login
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = "personalize.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});
