// personalize.js
import firebaseConfig from './config.js';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Get the current user
const user = auth.currentUser;

document.getElementById("personalizeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const preferences = [];
    const checkboxes = document.querySelectorAll("input[name='interest']:checked");
    checkboxes.forEach((checkbox) => {
        preferences.push(checkbox.value);
    });

    if (user) {
        db.collection("users").doc(user.uid).set({
            preferences: preferences
        })
        .then(() => {
            console.log("Preferences saved!");
            alert("Your preferences have been saved!");
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.error("Error saving preferences:", error);
        });
    }
});
