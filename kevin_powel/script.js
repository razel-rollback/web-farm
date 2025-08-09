let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');   // switch icon
    navlist.classList.toggle('open'); // show/hide nav
};
