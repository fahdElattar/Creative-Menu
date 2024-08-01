const btn = document.querySelector('button')
const i = document.querySelector('i')
const menu = document.querySelector('.menu')
const links = document.querySelector('.links')

btn.addEventListener('click', () => {
    menu.classList.toggle('active')
    links.classList.toggle('active')

    i.classList.contains('fa-bars') ? 
    i.classList.replace('fa-bars', 'fa-xmark') : 
    i.classList.replace('fa-xmark', 'fa-bars');
})