// var navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', function() {
//   if (window.pageYOffset > 100) { /* example scroll amount */
//     navbar.classList.add('navbar--hidden');
//   } else {
//     navbar.classList.remove('navbar--hidden');
//   }
// });
// navbar 
var prevScrollpos = window.pageYOffset;
var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove('navbar--hidden');
  } else {
    navbar.classList.add('navbar--hidden');
  }
  prevScrollpos = currentScrollPos;
});

//show more && show less
const showMoreButtons = document.querySelectorAll('.show-more');

showMoreButtons.forEach((showMoreButton) => {
  const internDescription = showMoreButton.parentNode;
  const showLessButton = document.createElement('span');
  showLessButton.classList.add('show-less');
  showLessButton.textContent = 'Show Less';

  function expandDescription() {
    internDescription.classList.add('expanded');
    internDescription.classList.remove('collapsed');
    internDescription.appendChild(showLessButton);
  }

  function collapseDescription() {
    internDescription.classList.add('collapsed');
    internDescription.classList.remove('expanded');
    internDescription.removeChild(showLessButton);
  }

  showMoreButton.addEventListener('click', expandDescription);
  showMoreButton.addEventListener('touchstart', expandDescription);
  showMoreButton.addEventListener('mousedown', expandDescription);
  showMoreButton.addEventListener('pointerdown', expandDescription);

  showLessButton.addEventListener('click', collapseDescription);
  showLessButton.addEventListener('touchstart', collapseDescription);
  showLessButton.addEventListener('mousedown', collapseDescription);
  showLessButton.addEventListener('pointerdown', collapseDescription);
});