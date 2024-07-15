document.addEventListener("DOMContentLoaded", function() {
    const imageElement = document.getElementById("changing-image");
    const images = [
        "image1.png",
        "image2.png",
        "image3.png"
    ];
    let currentIndex = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }

    setInterval(changeImage, 5000); // Change image every 5 seconds
});
