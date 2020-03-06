window.onload = function () {
  const root = document.querySelector('#root');
  root.addEventListener('mouseenter', function () {
    root.className += 'large';
  });
  root.addEventListener('mouseout', function () {
    root.className = '';
  });
};
