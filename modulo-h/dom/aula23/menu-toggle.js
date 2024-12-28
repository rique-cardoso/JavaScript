const menu = document.querySelector('#menu')
const header = document.querySelector('#header')
menu.addEventListener('click', e => {
    header.classList.toggle('active')
})