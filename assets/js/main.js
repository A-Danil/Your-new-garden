import Scrolling from './scrolling.js'
import SwipeCarousel from './swipe-carousel.js'
import Hamburger from './humburger.js'

// add class for header when it scrolling
const scrolling = new Scrolling({
  scrollChange: 100
})

scrolling.init();

// add smooth scrolling
const anchors = document.querySelectorAll('.header__navbar-list a')
const backToTop = document.querySelector('#back2top')
for (let anchor of anchors) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()
    const blockID = anchor.getAttribute('href')
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

backToTop.addEventListener('click', () => {
  const topID = backToTop.getAttribute('href')
  document.querySelector(topID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

//slider
const carousel = new SwipeCarousel({
  interval: 5000,
  container: "#carousel",
  slideID: '.slider__item',
  isPlaying: true
});

carousel.init();

//hamburger
const hamb = new Hamburger({})

hamb.init();