const mouse = document.querySelector('.slider');
const trail = document.querySelector('.trail');
 
mouse.addEventListener('mousemove', function(e) {
  let x = e.pageX - this.offsetLeft;
  let y = e.pageY - this.offsetTop;
 
  trail.style.left = x + 'px';
  trail.style.top = y + 'px';
});
 
mouse.addEventListener('mouseleave', function() {
  trail.style.opacity = 0;
});
 
mouse.addEventListener('mouseenter', function() {
  trail.style.opacity = 0.5;
});

function toggleDarkMode() {
  const bodyElement = document.body;
  bodyElement.classList.toggle("light-mode");
}