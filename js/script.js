console.log("Hello, Welcome To My Portfolio!");

// Function to toggle the visibility of the navigation menu
console.log("Hello, Welcome To My Portfolio!");
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

// Function to toggle the visibility of the mobile navigation menu
function mobileMenuToggle() {
  var x = document.getElementById('mobileNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}