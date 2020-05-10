window.onload = function() {
	const app = document.getElementById('app');
	const offsetwidth = app.offsetWidth;
	const clientwidth = app.clientWidth;

	// 浏览器视口宽度包含滚动条，只读属性。普通元素上不存在innerWidth。
	// const innerwidth = app.innerwidth;
	console.log('inner-width', window.innerWidth); 
	console.log('client-width', clientwidth);
	console.log('offset-width', offsetwidth);
}