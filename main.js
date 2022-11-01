switchButton = document.querySelector('.chk-switch');
container = document.querySelector('.container');

switchButton.addEventListener('click', () => {
    container.classList.toggle("switch-theme-dark");
})

