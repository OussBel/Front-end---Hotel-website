// The selection of menu burger , side navbar, all its links, close button, DreamPlace and backdrop

const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__link')
const closeButton = document.querySelector('.nav__close')
const dreamPlace = document.querySelector('.heading-tertiary')
const backdrop = document.querySelector('.header__backdrop')

const open = () => {
  /////////// Open side navbar    /////////

  if (window.innerWidth <= 500) {
    nav.style.width = '82vw'
  } else if (window.innerWidth <= 900) {
    nav.style.width = '45vw'
  } else {
    nav.style.width = '35vw'
  }

  nav.style.visibility = 'visible'
  backdrop.style.display = 'block'
  closeButton.style.opacity = '1'

  //////////// Animate links  /////////

  navLinks.forEach((navLink, index) => {
    navLink.style.animation = `navLinks-slide .5s ease ${
      index / 8 + 0.2
    }s backwards`
    navLink.style.opacity = '1'
  })
}

const close = () => {
  nav.style.width = '0'
  nav.style.visibility = 'hidden'
  backdrop.style.display = 'none'
  closeButton.style.opacity = ' 0'
  navLinks.forEach((navLink) => {
    navLink.style.animation = ''
    navLink.style.opacity = '0'
  })
}

menu.addEventListener('click', open)
closeButton.addEventListener('click', close)
backdrop.addEventListener('click', close)

/////////////    Change the color of the header navbar to white  ////////////////////////
/////////////    as we scroll using the intersection observer api  ////////////////////////

const header = document.querySelector('.header')
const headerNav = document.querySelector('.header__box')

let options = {
  root: null,
  rootMargin: '-80px',
  threshold: 0,
}

const observer = new IntersectionObserver(function (entries) {
  const ent = entries[0]

  if (ent.isIntersecting === false) {
    headerNav.classList.add('header__obsolute')
  } else {
    headerNav.classList.remove('header__obsolute')
  }
}, options)

observer.observe(header)
