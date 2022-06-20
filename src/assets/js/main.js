//--- Navigation
const menuToggle = document.querySelector('.site-header .start-button');
const navigation = document.querySelector('.site__nav');

menuToggle.addEventListener('click', () => {
	navigation.classList.toggle('active');
	menuToggle.classList.toggle('active');
});