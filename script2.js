// Add functionality for dynamic cart total, search functionality, etc.
// Example: Simulate cart total increase.
document.querySelector('.cart').addEventListener('click', () => {
    let cartTotal = parseInt(document.querySelector('.cart-total').textContent.replace('PKR ', ''));
    cartTotal += 1000; // Add 1000 PKR for demonstration.
    document.querySelector('.cart-total').textContent = 'PKR ' + cartTotal;
});


document.querySelectorAll('.cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('Item added to cart!');
    });
});
const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        alert('Redirecting to ' + card.querySelector('h3').innerText + ' page!');
        // You can add redirection logic here
        // For example:
        // window.location.href = 'your-page-url';
    });
});
document.querySelectorAll('.jewelry-card').forEach(card => {
    card.addEventListener('click', () => {
        alert(card.querySelector('h3').innerText + ' clicked!');
    });
});
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert(button.parentElement.querySelector('h3').innerText + ' has been added to the cart!');
    });
});
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert(button.parentElement.querySelector('h3').innerText + ' has been added to the cart!');
    });
});

document.querySelector('.shop-all').addEventListener('click', () => {
    window.location.href = '/all-products';  // Replace with the actual link to your products page
});
if (fullName && email) {
    alert(`Thank you, ${fullName}! We have received your details and will get back to you soon.`);
    // Here, you can also send the data to your server or email.
} else {
    alert('Please fill out all the fields.');
}
