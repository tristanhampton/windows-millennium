//--- Navigation
const menuToggle = document.querySelector('.site-header .start-button');
const navigation = document.querySelector('.site__nav');

menuToggle.addEventListener('click', () => {
	navigation.classList.toggle('active');
	menuToggle.classList.toggle('active');
});

function closeMenu() {
	menuToggle.classList.remove('active');
	navigation.classList.remove('active');
}

//--- Pico 8 Games
const gameButtons = document.querySelectorAll('button.game.js-load-iframe');

gameButtons.forEach(button => {
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

	// attach close function
	closteBtn.addEventListener('click', function (e) {
		closeWindow(e.target);
	});

	// attach maximize function
	if (maximizeBtn != undefined) {
		maximizeBtn.addEventListener('click', function (e) {
			maximizeWindow(e.target);
		});
	}

	// if opening game from menu, close it
	closeMenu();
}

//--- "Internet Explorer"
const ieButtons = document.querySelectorAll('button.browser.js-load-iframe');

ieButtons.forEach(button => {
	button.addEventListener('click', function (e) {
		const src = this.dataset.iframe;
		const img = this.dataset.icon;
		const title = this.dataset.title;
		const url = this.dataset.iframe;
		initBrowser(src, img, title, url);
	});
});

function initBrowser(src, img, title, url) {
	const desktop = document.querySelector('main');
	let template = document.querySelector('#template-browser');
	let browserWindow = template.content.cloneNode(true);
	let iframe = browserWindow.querySelector('iframe');
	let browserTitle = browserWindow.querySelector('.window__title');
	let browserIcon = browserWindow.querySelector('.window__icon');
	let closteBtn = browserWindow.querySelector('.btn-window-control.type--close');
	let maximizeBtn = browserWindow.querySelector('.btn-window-control.type--maximize');
	let addressBar = browserWindow.querySelector('input.address');
	let addressForm = browserWindow.querySelector('form');

	browserIcon.setAttribute('src', 'img/icons/' + img);
	browserTitle.innerText = title;

	iframe.setAttribute('src', src);

	addressBar.value = url;
	desktop.appendChild(browserWindow);

	// attach close function
	closteBtn.addEventListener('click', function (e) {
		closeWindow(e.target);
	});

	// attach maximize function
	if (maximizeBtn != undefined) {
		maximizeBtn.addEventListener('click', function (e) {
			maximizeWindow(e.target);
		});
	}

	addressForm.addEventListener('submit', function (e) {
		e.preventDefault();
		let newSrc = addressBar.value;
		iframe.setAttribute('src', newSrc);
	});

	// if opening game from menu, close it
	closeMenu();
}

//--- Window Functions
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