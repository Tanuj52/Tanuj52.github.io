document.addEventListener('DOMContentLoaded', function() {
    // Existing slider functionality for certifications
    const sliderWrapper = document.querySelector('.certificate-wrapper');
    const slides = Array.from(document.querySelectorAll('.certificate-item'));
    let slideWidth = slides[0].offsetWidth;
    let currentIndex = 0;

    function updateSlidePosition() {
        sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function recalculateSlideWidth() {
        slideWidth = slides[0].offsetWidth;
        updateSlidePosition(); // Reposition the slides after recalculation
    }

    document.querySelector('.slide-area.left').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePosition();
        }
    });

    document.querySelector('.slide-area.right').addEventListener('click', function() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlidePosition();
        }
    });

    // Recalculate slide width on window resize
    window.addEventListener('resize', recalculateSlideWidth);

    // New functionality for project images slider
    const projectImages = Array.from(document.querySelectorAll('.project-images img'));
    let imageIndex = 0;
    const imageInterval = 3000; // Interval for automatic sliding (3 seconds)

    function showNextImage() {
        imageIndex = (imageIndex + 1) % projectImages.length; // Loop back to the first image
        updateImageDisplay();
    }

    function updateImageDisplay() {
        projectImages.forEach((img, index) => {
            img.style.display = index === imageIndex ? 'block' : 'none';
        });
    }

    // Initialize the display
    updateImageDisplay();

    // Automatic sliding
    setInterval(showNextImage, imageInterval);

    // Click functionality for manual control (if desired)
    projectImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            imageIndex = (index + 1) % projectImages.length; // Move to the next image
            updateImageDisplay();
        });
    });
});
