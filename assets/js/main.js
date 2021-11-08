// add class for header when it scrolling
const header = document.querySelector('#header')
const nav = document.querySelector('.header__navbar')
const anchors = document.querySelectorAll('.header__navbar-list a')
const backToTop = document.querySelector('#back2top')

window.addEventListener('scroll', scrolled)

function scrolled(){
  scrollingStyleOfHeader();
  scrollingStyleOfLinks();
}

function scrollingStyleOfHeader() {
  const scrollChange = 100
  const addClassOnScroll = () => nav.classList.add('scrolled')
  const removeClassOnScroll = () => nav.classList.remove('scrolled')

  scrollPos = window.scrollY
  if (scrollPos >= scrollChange) {
    addClassOnScroll()
    header.style.backgroundColor = 'rgba(1, 1, 1, 0.85)'
  }
  else {
    removeClassOnScroll()
    header.style.backgroundColor = 'transparent'
  }
}

function scrollingStyleOfLinks() {
  let scrollDistance = window.scrollY

  document.querySelectorAll('section').forEach((el, i) => {
    if(el.offsetTop - header.clientHeight <= scrollDistance) {
      document.querySelectorAll('.header__navbar a').forEach((el) => {
        if (el.classList.contains('active--link')) {
          el.classList.remove('active--link');
        }
      });
      document.querySelectorAll('.header__navbar-list li')[i].querySelector('a').classList.add('active--link')
    }
  })
  if (scrollDistance === 0) {
    document.querySelectorAll('.header__navbar a')[1].classList.remove('active--link')
  }
}

// smooth scrolling
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

backToTop.addEventListener('click', (e) => {
  e.preventDefault()
  const topID = backToTop.getAttribute('href')
  document.querySelector(topID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

//slider
const nextBtn = document.querySelector('#next-btn')
const prevBtn = document.querySelector('#prev-btn')
const container = document.querySelector('#slider')
const slideItems = container.querySelectorAll('.slider__item')
const slidesContainer = document.querySelector('#carousel')
const slidesCount = slideItems.length
const indicator = document.querySelectorAll('.indicator')
const indContainer = document.querySelector('.slider__indicators')

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)
indContainer.addEventListener('click', indicate)

let currentSlide = 0

function nextSlide() {
  goToNth(currentSlide + 1)
}

function prevSlide() {
  goToNth(currentSlide - 1)
}

function indicate(e) {
  let t = e.target

  if (t && t.classList.contains('indicator')) {
    goToNth(+t.dataset.slideTo)
  }
}

function goToNth(n) {
  slideItems[currentSlide].classList.toggle('active')
  indicator[currentSlide].classList.toggle('active')
  currentSlide = (n + slidesCount) % slidesCount
  slideItems[currentSlide].classList.toggle('active')
  indicator[currentSlide].classList.toggle('active')
}

function play() {
  setInterval(nextSlide, 5000)
}
play()

//hamburger
const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".header__navbar-menu")
hamburger.addEventListener('click', () => {
 hamburger.classList.toggle('change')
 menu.classList.toggle('show')
});

