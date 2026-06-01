// Array strings to loop over dynamically
const rolesArr = ["~ WEB DEVELOPER!", "~ APP DEVELOPER!", "~ APPLICATION PROGRAMMER!"];
const targetSpan = document.getElementById("es6-typing");

// Reusable promise-based time delay
const sleepTimer = (ms) => new Promise(res => setTimeout(res, ms));

const initTypewriter = async () => {
    let currentStringIdx = 0;

    while (true) {
        let fullString = rolesArr[currentStringIdx];

        // Type String
        for (let i = 0; i <= fullString.length; i++) {
            targetSpan.textContent = fullString.substring(0, i);
            await sleepTimer(100); // speed typing parameter
        }

        await sleepTimer(2000); // stay visible configuration

        // Erase String
        for (let i = fullString.length; i >= 0; i--) {
            targetSpan.textContent = fullString.substring(0, i);
            await sleepTimer(50); // speed backspace configuration
        }

        await sleepTimer(600);
        
        // Loop seamlessly back to zero index array placement safely
        currentStringIdx = (currentStringIdx + 1) % rolesArr.length;
    }
};

// Start string rendering logic when complete DOM finishes mounting
document.addEventListener("DOMContentLoaded", initTypewriter);

function sendEmail(){
    var params = {
        subject: document.getElementById("subject").value,
        name: document.getElementById("name").value,
        user_phone: document.getElementById("user_phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    emailjs.send("service_3x4hpzd", "template_1qlkvfo", params)
        .then(function() {
            alert("Email sent successfully!");
        }, function(error) {
            console.error("Failed to send email:", error);
        });
}