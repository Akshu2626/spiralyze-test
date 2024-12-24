const button = document.querySelector(".submit-button");
button.addEventListener('click', () => {
    button.style.backgroundColor = ' #35BB9C';
    setTimeout(() => {
        button.style.backgroundColor = 'red';
    }, 1000);
});


const carousel = document.querySelector('.image-crusal'); // Main carousel container
const slides = document.querySelectorAll('.slide'); // Individual slides
const prevButton = document.querySelector('.arrow-prev'); // Left arrow button
const nextButton = document.querySelector('.arrow-next'); // Right arrow button
const bulletBoxes = document.querySelectorAll('.page3-bullet-box'); // Bullet indicators

let currentIndex = 0;
let startX = 0;
let endX = 0;

const updateCarousel = () => {
    const offset = currentIndex * -100; 
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`; 
    });
    updateBulletColors(); 
};

const updateBulletColors = () => {
    bulletBoxes.forEach((box, index) => {
        if (index === currentIndex) {
            box.style.backgroundColor = '#5BC8AF'; 
        } else {
            box.style.backgroundColor = 'grey'; 
        }
    });
};

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX; 
    if (startX > endX + 50) {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    } else if (startX < endX - 50) {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateCarousel();
        if (currentIndex == 2) {
            currentIndex = -1;
        }
    }
});

updateCarousel();
