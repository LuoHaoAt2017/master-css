const selector = document.querySelector;
const btn1 = document.querySelector(".section-1 button");
const btn2 = document.querySelector(".section-2 button");
const btn3 = document.querySelector(".section-3 button");
const btn4 = document.querySelector(".section-4 button");
const btn5 = document.querySelector(".section-5 button");
const btn6 = document.querySelector(".section-6 button");

const box1 = document.querySelector(".section-1 .box-1");
const box2 = document.querySelector(".section-2 .box-2");
const box3 = document.querySelector(".section-3 .box-3");
const box4 = document.querySelector(".section-4 .box-4");
const box5 = document.querySelector(".section-5 .box-5");
const box6 = document.querySelector(".section-6 .box-6");

function onclick1() {
	const style = box1.style;
	if (style.display === 'none') {
		style.display = 'block';
	} else {
		style.display = 'none';
	}
}

function onclick2() {
	const style = box2.style;
	if (style.visibility === 'hidden') {
		style.visibility = 'visible';
	} else {
		style.visibility = 'hidden';
		style.transitionProperty = 'visibility';
		style.transitionDuration = '0.5s';
	}
}

function onclick3() {
	const style = box3.style;
	if (style.opacity === "0") {
		style.opacity = "1";
	} else {
		style.opacity = "0";
	}
}

function onclick4() {
	const style = box4.style;
	// debugger;
	if (style.zIndex !== "-1") {
		style.zIndex = -1;
	} else {
		style.zIndex = 1;
	}
}

function onclick5() {
	const style = box5.style;
	if (style.maxHeight !== "0px") {
		// 不应该设置padding，maxHeight仅仅将height设为0。
		style.maxHeight = "0px";
	} else {
		style.maxHeight = "none";
	}
}

function onclick6() {
	const style = box6.style;
	if (style.visibility === 'hidden') {
		style.visibility = 'visible';
		style.position = 'relative';
	} else {
		style.visibility = 'hidden';
		style.position = 'absolute';
		style.transitionProperty = 'visibility';
		style.transitionDuration = '0.5s';
	}
}

window.onload = function() {
	document.addEventListener('click', function(evt) {
		const option = evt.target.dataset.control;
		switch(option) {
			case 'box-1': onclick1(); break;
			case 'box-2': onclick2(); break;
			case 'box-3': onclick3(); break;
			case 'box-4': onclick4(); break;
			case 'box-5': onclick5(); break;
			case 'box-6': onclick6(); break;
			default: console.log(evt.target);
		}
	});
}
