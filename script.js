// Smooth Scroll Animation (Optional for better scrolling transitions)
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Burger Menu Toggle
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('toggle'); // Add/remove animation class
    navLinks.classList.toggle('active'); // Show/hide menu
});


// Function to assign random background image from respective directories
function setSectionBackgrounds() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionId = section.id; // Get the section's id
        const imageDirectory = `./assets/sections/${sectionId}`;

        console.log(imageDirectory);

        const imageFiles = [
            `${imageDirectory}/image1.jpg`,
            `${imageDirectory}/image2.jpg`,
            `${imageDirectory}/image3.jpg`
        ];
        console.log(imageFiles);

        const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];
        section.style.backgroundImage = `url('${randomImage}')`;
    });
}

// Run the function on page load
document.addEventListener('DOMContentLoaded', setSectionBackgrounds);
