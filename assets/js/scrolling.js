class Scrolling {
  constructor (params) {

    const settings = {...{scrollChange: 100,header: '#header' ,nav: '.header__navbar', },...params}

    this.header = document.querySelector(settings.header);
    this.nav = document.querySelector(settings.nav);
    this.scrollChange = settings.scrollChange;
  }

  _initListeners(){
    window.addEventListener('scroll', this._scrolled.bind(this));
  }

  _scrolled(){
    this.scrollingStyleOfHeader();
    this.scrollingStyleOfLinks();
  }

  _isStartPosition(){
    if(window.scrollY > 0) {
      this.addClassOnScroll();
    }
  }

  addClassOnScroll(){
    this.nav.classList.add('scrolled');
    this.header.style.backgroundColor = 'rgba(1, 1, 1, 0.85)';
  }

  removeClassOnScroll(){
    this.nav.classList.remove('scrolled');
    this.header.style.backgroundColor = 'transparent';
  }

  scrollingStyleOfHeader() {
    this.scrollPos = window.scrollY

    if (this.scrollPos >= this.scrollChange) {
      this.addClassOnScroll();
    }
    else {
      this.removeClassOnScroll();
    }
  }

  scrollingStyleOfLinks() {
    this.scrollDistance = window.scrollY;

    document.querySelectorAll('section').forEach((el, i) => {
      if(el.offsetTop - this.header.clientHeight <= this.scrollDistance) {
        document.querySelectorAll('.header__navbar-menu a').forEach((el) => {
          if (el.classList.contains('active--link')) {
            el.classList.remove('active--link');
          }
        });
        document.querySelectorAll('.header__navbar-list li')[i].querySelector('a').classList.add('active--link');
      }
    })
    if (this.scrollDistance === 0) {
      document.querySelectorAll('.header__navbar-menu a')[0].classList.remove('active--link');
    }
  }

  init(){
    this._initListeners();
    this._isStartPosition();
    this.scrollingStyleOfLinks();
  }
}

export default Scrolling;