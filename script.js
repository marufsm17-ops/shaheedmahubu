// Hamburger menu for mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth <= 600) {
            navLinks.classList.remove('active');
        }
    });
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let name = contactForm.name.value.trim();
    let email = contactForm.email.value.trim();
    let message = contactForm.message.value.trim();

    if(!name || !email || !message) {
        formMsg.textContent = 'সবগুলো ঘর পূরণ করুন।';
        formMsg.style.color = '#8B0000';
        return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        formMsg.textContent = 'সঠিক ইমেইল লিখুন।';
        formMsg.style.color = '#8B0000';
        return;
    }

    // Success
    formMsg.textContent = 'আপনার মেসেজ সফলভাবে পাঠানো হয়েছে!';
    formMsg.style.color = 'green';
    contactForm.reset();

    // Optionally, send data to server here
});