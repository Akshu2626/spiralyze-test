const button = document.querySelector(".submit-button");
button.addEventListener('click', () => {
    
    button.style.backgroundColor = ' #35BB9C';

    
    setTimeout(() => {
        button.style.backgroundColor = 'red';
    }, 1000);
});








