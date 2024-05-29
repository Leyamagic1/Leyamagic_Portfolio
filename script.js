const slider = document.querySelector('.slider');
const trail = document.querySelector('.trail');


function updateCursor(e) {
  let x = e.pageX - slider.offsetLeft;
  let y = e.pageY - slider.offsetTop;

  trail.style.left = x + 'px';
  trail.style.top = y + 'px';
}

document.addEventListener('mousemove', updateCursor);

slider.addEventListener('mouseleave', function() {
  trail.style.opacity = 0;
});

slider.addEventListener('mouseenter', function() {
  trail.style.opacity = 0.5;
});




const btnMode = document.getElementById('btnMode');

btnMode.addEventListener('click', () => {
  toggleDarkMode();
});


function toggleDarkMode() {
  const bodyElement = document.body;
  bodyElement.classList.toggle("light-mode");
}