
const themeButton = document.getElementById('themeButton');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// ============================
// Theme Switcher
// ============================

function updateThemeButton() {
    const light = document.body.classList.contains('light-theme');

    themeButton.textContent = light ? '☀ Light' : '☾ Theme';

    themeButton.setAttribute(
        'aria-label',
        light ? 'Switch to dark theme' : 'Switch to light theme'
    );
}

themeButton.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    updateThemeButton();
});

updateThemeButton();

// ============================
// Contact Form — Send Email
// ============================

contactForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const submitButton = contactForm.querySelector(
        'button[type="submit"]'
    );

    const originalText = submitButton.textContent;

    // Show sending status
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    formMessage.textContent = '';

    // Collect form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    data._subject = `New Portfolio Message from ${data.name}`;
    data._replyto = data.email;

    try {
        const response = await fetch(
            'https://formsubmit.co/ajax/taheralomry2@gmail.com',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        if (
            !response.ok ||
            result.success === false ||
            result.success === 'false'
        ) {
            throw new Error('The message could not be sent.');
        }

        formMessage.textContent =
            'Thank you! Your message has been sent successfully.';

        contactForm.reset();

    } catch (error) {
        console.error('Contact form error:', error);

        formMessage.textContent =
            'Sorry, your message could not be sent. Please try again.';
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }
});
