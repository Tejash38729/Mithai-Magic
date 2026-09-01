// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Category Filter Function
function filterCategory(category) {
    // Update active tab button
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter menu cards
    const cards = document.querySelectorAll('.menu-card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Simple WhatsApp Redirection for Form Inquiry
function handleInquiry(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const feedback = document.getElementById('formFeedback');

    feedback.style.color = '#25d366';
    feedback.innerText = "Redirecting to WhatsApp to send your inquiry...";

    const fullMessage = `Hello Mithai Magic (Charholi Budruk),%0A%0AMy name is: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AOrder/Inquiry: ${encodeURIComponent(message)}`;
    
    // Replace with your actual WhatsApp phone number
    const shopWhatsAppNumber = "919999999999"; 

    setTimeout(() => {
        window.open(`https://wa.me/${shopWhatsAppNumber}?text=${fullMessage}`, '_blank');
        feedback.innerText = "Sent! We will reach out shortly.";
        document.getElementById('inquiryForm').reset();
    }, 1000);
}
