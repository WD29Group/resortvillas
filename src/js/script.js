const navItems = document.querySelectorAll('nav a');

navItems.forEach(navItem => {
  navItem.addEventListener('click', () => {
    // remove the active class from all nav items
    navItems.forEach(navItem => navItem.classList.remove('active'));
    // add the active class to the clicked nav item
    navItem.classList.add('active');
  });
});
