//nav-fix
window.onscroll = function() {
  const header = document.querySelector('header')
  const fixnav = header.offsetTop
  const toTop = document.querySelector('#to-top')

  if(window.pageYOffset > fixnav) {
    header.classList.add('nav-fix')
    toTop.classList.remove('hidden')
    toTop.classList.add('flex')
  } else{
    header.classList.remove('nav-fix')
    toTop.classList.remove('flex')
    toTop.classList.add('hidden')
  }
}

// burger
const burger = document.querySelector('#burger')
const navmenu = document.querySelector('#nav-menu')

burger.addEventListener('click', function() {
  burger.classList.toggle('burger-active')
  navmenu.classList.toggle('hidden')
})


// click random page
window.addEventListener('click', function(e) {
  if(e.target != burger && e.target != navmenu) {
    burger.classList.remove('burger-active')
    navmenu.classList.add('hidden')
  }
})

// dark mode toggle
const darktoggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darktoggle.addEventListener('click', function() {
  if (darktoggle.checked) {
    html.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    html.classList.remove('dark')
    localStorage.theme = 'light'
  }
})

// connect toggle with mode

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darktoggle.checked = true
} else {
  darktoggle.checked = false
}