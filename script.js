// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!fullName || !emailAddress || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }

    alert('Message sent successfully!');
    // Here you can add code to actually send the form data to your server
});