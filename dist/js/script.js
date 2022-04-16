//nav-fix
window.onscroll = function() {
  const header = document.querySelector('header')
  const fixnav = header.offsetTop

  if(window.pageYOffset > fixnav) {
    header.classList.add('nav-fix')
  } else{
    header.classList.remove('nav-fix')
  }
}

// burger
const burger = document.querySelector('#burger')
const navmenu = document.querySelector('#nav-menu')

burger.addEventListener('click', function() {
  burger.classList.toggle('burger-active')
  navmenu.classList.toggle('hidden')
})
