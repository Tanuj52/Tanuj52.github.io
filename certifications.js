// Automatic Slider for Certifications Section
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.certificates-slider');
    const items = document.querySelectorAll('.certificate-item');

    let currentIndex = 0;

    function slide() {
        currentIndex = (currentIndex + 1) % items.length;
        const offset = -currentIndex * 100; // Move left by 100%
        slider.style.transform = `translateX(${offset}%)`;
    }

    setInterval(slide, 3000); // Change slide every 3 seconds
});
