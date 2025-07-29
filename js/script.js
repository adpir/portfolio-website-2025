// Function to toggle the visibility of the navigation menu
function menuToggle() {
  let x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

  const m = document.querySelector('.marquee');
  m.innerHTML = m.innerHTML.trim() + m.innerHTML;