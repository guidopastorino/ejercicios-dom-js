const $btnOpenMenu = document.querySelector('#btnOpenMenu')
const $menu = document.querySelector('#menu')

$btnOpenMenu.addEventListener('click', () => {
    $btnOpenMenu.classList.toggle('open')
    $btnOpenMenu.classList.toggle('close')

    $menu.classList.toggle('menu-open')
    $menu.classList.toggle('menu-close')
})