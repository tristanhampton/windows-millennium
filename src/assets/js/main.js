$( document ).ready(function() {
    
//--- Navigation
	const menuToggle = $('.header__menu-toggle');
	const navigation = $('.header__main-nav');

	menuToggle.click(function() {
		navigation.addClass('open');
	});



});