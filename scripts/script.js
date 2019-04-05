const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');

burgerButton.addEventListener('click', () => {
	menu.classList.toggle('is-active')
})