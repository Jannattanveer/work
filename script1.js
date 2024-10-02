document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;

    if (fullName && email) {
        alert(`Thank you, ${fullName}! We have received your details and will get back to you soon.`);
        // Here, you can also send the data to your server or email.
    } else {
        alert('Please fill out all the fields.');
    }
});
