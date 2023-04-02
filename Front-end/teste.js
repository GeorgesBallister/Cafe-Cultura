var menuItems = document.querySelectorAll('.menu-bar li');

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function() {
    for (var j = 0; j < menuItems.length; j++) {
      menuItems[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}
