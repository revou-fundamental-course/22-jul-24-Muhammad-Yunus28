document.addEventListener("DOMContentLoaded", () => {
    // Form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const destination = document.getElementById('destination').value;

        if (name === "" || email === "" || destination === "") {
            alert("Please fill in all fields");
            event.preventDefault();
        }
    });

    // Package details and image toggle
    const packages = document.querySelectorAll('.package');
    packages.forEach(pkg => {
        pkg.addEventListener('click', () => {
            pkg.classList.toggle('active');
        });
    });
});