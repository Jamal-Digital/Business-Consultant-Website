const menuIcon = document.querySelector('.menu-icon');
const menuLink = document.querySelector('.menu-link');

menuIcon.onclick = ()=>{
    menuLink.classList.toggle('active-menu');
}
window.onscroll = ()=>{
    menuLink.classList.remove('active-menu');
}