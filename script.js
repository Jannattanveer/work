const form = document.getElementById('subscribe-form');
const emailInput = document.getElementById('email');
const subscribeMessage = document.getElementById('subscribe-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailValue = emailInput.value;
    
    if (validateEmail(emailValue)) {
        subscribeMessage.textContent = "Thank you for subscribing!";
        subscribeMessage.style.color = "green";
        emailInput.value = ''; // Clear the input field
    } else {
        subscribeMessage.textContent = "Please enter a valid email address.";
        subscribeMessage.style.color = "red";
    }
});

// Simple email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
