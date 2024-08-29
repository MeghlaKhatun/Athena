const menuBar = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu-bar');
menuBar.addEventListener('click', () => {
	menu.classList.toggle("active")
})
