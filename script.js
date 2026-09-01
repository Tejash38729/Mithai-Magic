// Mobile Navigation Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Category Tab Filtering
function filterCategory(category) {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const cards = document.querySelectorAll('.menu-card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// WhatsApp Order / Inquiry Handler
function handleInquiry(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');

    feedback.style.color = '#25d366';
    feedback.innerText = "Opening WhatsApp to send your order...";

    const formattedMessage = `Hello Mithai Magic (Charholi Budruk),%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Order/Inquiry:* ${encodeURIComponent(message)}`;
    
    // Official Mithai Magic WhatsApp Contact
    const shopWhatsAppNumber = "919637493711"; 

    setTimeout(() => {
        window.open(`https://wa.me/${shopWhatsAppNumber}?text=${formattedMessage}`, '_blank');
        feedback.innerText = "Order sent! We will confirm shortly.";
        document.getElementById('inquiryForm').reset();
    }, 800);
}
entById('inquiryForm').reset();
    }, 1000);
}
