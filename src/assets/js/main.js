//--- Navigation
const menuToggle = document.querySelector('.site-header .start-button');
const navigation = document.querySelector('.site__nav');

menuToggle.addEventListener('click', () => {
	navigation.classList.toggle('active');
	menuToggle.classList.toggle('active');
});

//--- Apps
const iframeButtons = document.querySelectorAll('button.js-load-iframe');

iframeButtons.forEach(button => {
	button.addEventListener('click', function (e) {
		const src = this.dataset.iframe;
		const img = this.dataset.icon;
		const title = this.dataset.title;
		initGame(src, img, title);
	});
});

function initGame(src, img, title) {
	const desktop = document.querySelector('main');
	let template = document.querySelector('#template-game');
	let gameWindow = template.content.cloneNode(true);
	let iframe = gameWindow.querySelector('iframe');
	let browserTitle = gameWindow.querySelector('.window__title');
	let browserIcon = gameWindow.querySelector('.window__icon');
	let closteBtn = gameWindow.querySelector('.btn-window-control.type--close');
	let maximizeBtn = gameWindow.querySelector('.btn-window-control.type--maximize');

	browserIcon.setAttribute('src', 'img/icons/' + img);
	browserTitle.innerText = title;

	iframe.setAttribute('src', src);
	desktop.appendChild(gameWindow);

	closteBtn.addEventListener('click', function (e) {
		closeWindow(e.target);
	});

	maximizeBtn.addEventListener('click', function (e) {
		maximizeWindow(e.target);
	});
}

function closeWindow(closeButton) {
	let window = findAncestor(closeButton, 'window');
	window.remove();
}

function maximizeWindow(maximizeButton) {
	let window = findAncestor(maximizeButton, 'window');
	window.classList.toggle('maximized');
}

function findAncestor(el, cls) {
	while ((el = el.parentElement) && !el.classList.contains(cls));
	return el;
}