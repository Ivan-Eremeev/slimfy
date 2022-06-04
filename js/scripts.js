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

});