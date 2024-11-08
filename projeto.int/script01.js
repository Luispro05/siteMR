let slideIndex = 0;

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("carousel-item");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Ocultar todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Mostrar o slide atual
    slides[slideIndex].style.display = "block";
}

// Inicializa o carrossel
showSlide(slideIndex);
