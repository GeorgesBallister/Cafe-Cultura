button.addEventListener("click", function() {
    button.style.backgroundColor = "brown";
  });

var menuItems = document.querySelectorAll('.footer-menu ul li');

// for (var i = 0; i < menuItems.length; i++) {
// menuItems[i].addEventListener('click', function() {
//     for (var j = 0; j < menuItems.length; j++) {
//     menuItems[j].classList.remove('active');
//     }
//     this.classList.add('active');
// });
// }

function toggleActive(btn) {
  // remove active class from all buttons
  const buttons = document.querySelectorAll('.btn-group-vertical button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  const base = document.getElementById("grid0");
  const rec = document.getElementById("txtrec");
  const ava = document.getElementById("txtava");
  rec.style.display = 'none';
  ava.style.display= 'flex';
  base.style.display = 'none';

  // add active class to clicked button
  btn.classList.add('active');

  const grids = document.querySelectorAll('.image-grid');
  grids.forEach(grid => {
    if (grid.id === 'grid' + btn.id.slice(-1)) {
      grid.style.display = 'flex';
    } else {
      grid.style.display = 'none';
    }
  });
}