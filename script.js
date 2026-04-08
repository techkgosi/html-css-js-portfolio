function toggleMenu() {
    const menu = document.querySelector (".menu-links");
    const icon = document.querySelector (".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
{
    
}
     let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll(".carousel-item");

    slides[currentSlide].classList.remove("active");

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

}
