// Automatic Slider for Project Images
document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.project-images img');

    projectImages.forEach((img, index) => {
        setTimeout(() => {
            img.style.transform = 'scale(1.05)';
            setTimeout(() => {
                img.style.transform = 'scale(1)';
            }, 2000); // Scale back after 2 seconds
        }, index * 2000); // Apply the effect with a delay between images
    });
});
