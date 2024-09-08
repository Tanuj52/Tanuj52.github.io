document.addEventListener('DOMContentLoaded', () => {
    const certificateContainer = document.querySelector('.certificates-slider');
    const certificateItems = document.querySelectorAll('.certificate-item');
    const totalCertificates = certificateItems.length;
    let currentIndex = 0;

    // Function to show the current certificate
    function showCertificate(index) {
        certificateItems.forEach((item, i) => {
            item.style.transform = `translateX(${-(index * 100)}%)`;
        });
    }

    // Initialize the slider to show the first certificate
    showCertificate(currentIndex);

    // Click event on the container to navigate right or left
    certificateContainer.addEventListener('click', (event) => {
        const containerWidth = certificateContainer.offsetWidth;
        const clickX = event.clientX - certificateContainer.getBoundingClientRect().left;

        if (clickX > containerWidth / 2) {
            // Clicked on the right half of the container
            if (currentIndex < totalCertificates - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Loop back to the first certificate
            }
        } else {
            // Clicked on the left half of the container
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalCertificates - 1; // Loop back to the last certificate
            }
        }
        showCertificate(currentIndex);
    });

    // Optional: Auto-slide functionality
    setInterval(() => {
        certificateContainer.click(); // Simulate a click to move to the next certificate
    }, 5000); // Change every 5 seconds
});
