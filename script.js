const button = document.querySelector(".submit-button");
button.addEventListener('click', () => {
    button.style.backgroundColor = ' #35BB9C';
    setTimeout(() => {
        button.style.backgroundColor = '#5bc8af';
    }, 200);
});


const carousel = document.querySelector('.image-crusal');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.arrow-prev');
const nextButton = document.querySelector('.arrow-next');
const bulletBoxes = document.querySelectorAll('.page3-bullet-box');

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


// inputs



const inputs = document.querySelectorAll(".first-data");
const tooltips = document.querySelector(".tooltips");

inputs.forEach(input => {
    const placeholder = input.nextElementSibling;
    const tooltip = placeholder.nextElementSibling;


    input.addEventListener("input", () => {
        if (input.value.trim()) {
            placeholder.classList.add("filled");
            placeholder.classList.remove("empty");
            tooltips.style.display = "none"
            input.style.border = "2px solid white"
            placeholder.style.color = "white"
        } else {
            placeholder.classList.add("empty");
            placeholder.classList.remove("filled");
            tooltips.style.display = "none"
            input.style.border = "2px solid red"
            placeholder.style.color = "red"

        }
    });


    if (input.value.trim()) {
        placeholder.classList.add("filled");
        tooltip.classList.remove("show");
    } else {
        placeholder.classList.add("empty");
        tooltip.classList.add("show");
    }
});
















document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('.input-field input, .input-field select');
    let isValid = true;


    for (let input of inputs) {
        const tooltip = input.nextElementSibling.nextElementSibling;
        if (!input.value) {
            tooltip.style.display = 'block';
            input.focus();
            isValid = false;
            break;
        } else {
            tooltip.style.display = 'none';
        }
    }

    if (isValid) {
        window.open("./thankyoupage.html", "_blank")
    }
});





const btnplay = document.querySelector('.play-btn');
const videopopup = document.querySelector('.video-popup');
const videocancle = document.querySelector('.video-cross');
let flag = false

btnplay.addEventListener('click', () => {
    console.log("click ho gaya");
    if (flag === false) {
        videopopup.style.display = "flex"
        flag = true

    } else {
        videopopup.style.display = "none"
        flag = false
    }
})

videocancle.addEventListener('click', () => {
    videopopup.style.display = "none";
    flag = false
})



const pageLeftimg = document.querySelector(".page3-leftarrow");


pageLeftimg.addEventListener('click', () => {
    pageLeftimg.src = "/assets/leftc-btn.png";
    setTimeout(() => {
        pageLeftimg.src = "/assets/leftarrow.png";
    }, 100)
})





const hamburger = document.querySelector('.nav-hamburger');
let menuList = document.querySelector(".menuList")
menuList.style.maxHeight = "0px";
let mark = false;

function toggleBtn() {
    if (mark == false || menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
        hamburger.innerHTML = `<img src="/assets/x.svg" class="hamburger-img" alt="">`
        mark = true
    } else {
        menuList.style.maxHeight = "0px";
        hamburger.innerHTML = `<img src="/assets/hamburger.svg" class="hamburger-img" alt="">`
        mark = false
    }
}


