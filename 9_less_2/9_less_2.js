const images = document.querySelectorAll('img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let slideIndex = 0;

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

function nextSlide() {
    images[slideIndex].style.display = 'none';
    slideIndex++;
    images[slideIndex].style.display = 'block';

    if (slideIndex === images.length - 1) {
        nextButton.style.display = 'none';
    }
    if (slideIndex > 0) {
        prevButton.style.display = 'block';
    }
}

function prevSlide() {
    images[slideIndex].style.display = 'none';
    slideIndex--;
    images[slideIndex].style.display = 'block';

    if (slideIndex === 0) {
        prevButton.style.display = 'none';
    }
    if (slideIndex < images.length - 1) {
        nextButton.style.display = 'block';
    }
}