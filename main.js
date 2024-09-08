// jQuery is required for this script
$(document).ready(function() {
    // Certificates Slider
    let $certificatesSlider = $('.certificates-slider');
    let scrollAmount = 200; // Amount to scroll on each scroll action

    function scrollCertificates() {
        $certificatesSlider.animate({
            scrollLeft: '+=' + scrollAmount
        }, 800);
    }

    function scrollCertificatesBack() {
        $certificatesSlider.animate({
            scrollLeft: '-=' + scrollAmount
        }, 800);
    }

    // Auto-scroll certificates slider every 5 seconds
    setInterval(scrollCertificates, 5000);

    // Project Image Carousel
    let $projectImages = $('.project-images');
    let $projectImagesImgs = $projectImages.find('img');
    let imgIndex = 0;

    function rotateProjectImages() {
        $projectImagesImgs.eq(imgIndex).fadeOut(600, function() {
            imgIndex = (imgIndex + 1) % $projectImagesImgs.length;
            $projectImagesImgs.eq(imgIndex).fadeIn(600);
        });
    }

    // Start image rotation every 3 seconds
    setInterval(rotateProjectImages, 3000);

    // Smooth scroll for navigation links
    $('nav a').on('click', function(event) {
        event.preventDefault();
        let targetId = $(this).attr('href');
        let $target = $(targetId);

        $('html, body').animate({
            scrollTop: $target.offset().top - $('header').outerHeight()
        }, 800);
    });
});
