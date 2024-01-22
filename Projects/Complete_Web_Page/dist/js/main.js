const menuBtn = document.querySelector('.menu-btn')
const pyramid = document.querySelector('.menu-btn_pir')

const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')

const navItems = document.querySelectorAll('.menu-nav-item')

let showMenu = false

menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
  if (!showMenu) {
    pyramid.ClassList.add('open')
    nav.classList.add('open')
    menuNav.classList.add('open')

    navItems.forEach((item) => item.classList.add('open'))
    showMenu = true
  } else {
    pyramid.ClassList.remove('open')
    nav.classList.remove('open')
    menuNav.classList.remove('open')

    navItems.forEach((item) => item.classList.add('open'))
    showMenu = false
  }
}
