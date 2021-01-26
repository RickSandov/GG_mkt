// Initialize AOS
AOS.init();

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




const optionsChildren = document.getElementsByClassName('option');


// optionsChildren[0].classList.add('optionActive');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let last = 0;

const changeOption = async () => {
  current = 0;
  
  optionsChildren[last].classList.remove('optionActive');
  optionsChildren[current].classList.add('optionActive');
  await sleep(3500);

  optionsChildren[current].classList.remove('optionActive');
  current++;
  optionsChildren[current].classList.add('optionActive');
  await sleep(3500);

  optionsChildren[current].classList.remove('optionActive');
  current++;
  optionsChildren[current].classList.add('optionActive');

  await sleep(3500);
  last = current;
  
}

changeOption();
setInterval(changeOption, 10530);






