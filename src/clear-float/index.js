window.onload = function() {
	const normal = document.querySelector('.col-3 .normal');
	const display = document.querySelector('.col-3 .display');
	console.log('normal style ', normal.style);
	console.log('display float ', window.getComputedStyle(display).cssFloat);
	console.log('display display ', window.getComputedStyle(display).display);
}
