/*const scroll =
	window.requestAnimationFrame ||
	function (callback) {
		window.setTimeout(callback, 100 / 60);
	};

const elementToShow = document.querySelectorAll('.show-on-scroll');

function isElementInViewPort(el) {
	if (typeof jQuery === 'function' && el instanceof jQuery) {
		el = el[0];
	}

	const rect = el.getBoundingClientRect();
	return (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >=
			(window.innerHeight || document.documentElement.clientHeight) &&
			rect.top <=
				(window.innerHeight || document.documentElement.clientHeight)) ||
		(rect.top >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight))
	);
}

function loop() {
	elementToShow.forEach(function (element) {
		if (isElementInViewPort(element)) {
			element.classList.add('is-visible');
		} else {
			element.classList.remove('is-visible');
		}
	});
	scroll(loop);
}

loop();
*/
