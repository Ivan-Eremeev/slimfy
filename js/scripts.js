$(document).ready(function () {

  // Брэйкпоинты js
  var breakXl = 1400,
      breakLg = 1270,
      breakMd = 992,
      breakSm = 768,
      breakXs = 676;

  // Смена положения блока при изменении ширины окна
	// function(блок, куда переместить, куда вернуть)
	function replace(block, to, from, mediaBreak) {
		function replaceToggle() {
			if ($(window).width() <= mediaBreak) { // условие на ширину окна
				block.appendTo(to); // Переместить блок
			} else {
				block.appendTo(from); // Вернуть блок обратно
			}
		}
		replaceToggle();
		$(window).resize(function () {
			replaceToggle();
		})

	}
	replace($('#welcomeImg'), $('#welcomeImgTo'), $('#welcomeImgFrom'), breakSm);
	replace($('#welcomeChart'), $('#welcomeChartTo'), $('#welcomeChartFrom'), breakLg);

	// Mailtip Автоподстановка почты
	function emailAutocomplete(input) {
		if (input.length) {
			const domains = input.data('domains').split(', ');
			input.mailtip({
				mails: domains, // email autocomple list
				onselected: $.noop, // callback on selected
				width: 'auto',
				offsetTop: 4,
				offsetleft: 0,
				zindex: 2
			})
		}
	};
	emailAutocomplete($('#email'));

	// Анимация графика
	function chartAnimate() {
		const after = $('.chart__after');
		const target = $('.chart__target');
		const finishDate = $('.chart__finish-date');
		setTimeout(() => {
			after.animate({
				width: 0
			}, 3500);
			setTimeout(() => {
				target.animate({
					opacity: 1
				}, 300);
			}, 4500);
			setTimeout(() => {
				finishDate.animate({
					opacity: 1
				}, 300);
			}, 4000);
		}, 1000);
	}
	chartAnimate();

	// setHeaightVariable();
	// window.addEventListener('resize', setHeaightVariable);
	// function setHeaightVariable() {
	// 	let vh = window.innerHeight * 0.01;
	// 	document.documentElement.style.setProperty('--vh', `${vh}px`);
	// }

});