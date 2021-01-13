// Initialize AOS
AOS.init();

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap');

// Get the navbar
let navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetHeight;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  

  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

window.onscroll = function() {myFunction()};
