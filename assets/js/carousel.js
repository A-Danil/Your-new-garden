class Carousel {
  constructor (params){

    const settings = {...{interval: 5000, container: '#carousel', slideID: '.slider__item', isPlaying: true},...params};

    this.container = document.querySelector(settings.container);
    this.slideItems = document.querySelectorAll(settings.slideID);
    this.isPlaying = settings.isPlaying;
    this.interval = settings.interval;
  }

  _initProps(){
    this.SLIDES_COUNT = this.slideItems.length;

    this.currentSlide = 0;
  }

  _initControls(){
    this.nextBtn = document.querySelector('#next-btn');
    this.prevBtn = document.querySelector('#prev-btn');
  }

  _initIndicators(){
    this.indContainer = document.querySelector('.slider__indicators');
    this.indItems = document.querySelectorAll('.indicator');
  }

  _initListeners(){
    this.nextBtn.addEventListener('click', this.next.bind(this));
    this.prevBtn.addEventListener('click', this.prev.bind(this));
    this.indContainer.addEventListener('click', this._indicate.bind(this));
  }

  _goToNth(n) {
    this.slideItems[this.currentSlide].classList.toggle('active');
    this.indItems[this.currentSlide].classList.toggle('active');
    this.currentSlide = (n + this.SLIDES_COUNT) % this.SLIDES_COUNT;
    this.slideItems[this.currentSlide].classList.toggle('active');
    this.indItems[this.currentSlide].classList.toggle('active');
  }

  _goToPrev(){
    this._goToNth(this.currentSlide - 1)
  }

  _goToNext(){
    this._goToNth(this.currentSlide + 1)
  }

  _pause(){
    if(this.isPlaying) {
      this.isPlaying = false;
      clearInterval(this.timerID);
    }
  }

  _play(){
    if(!this.isPlaying){
      this.isPlaying = true;
      this.timerID = setInterval(() => this._goToNext(), this.interval);
    }
  }

  _indicate(e) {
    const target = e.target

    if (target && target.classList.contains('indicator')) {
      this._pause();
      this._goToNth(+target.dataset.slideTo);
    }
  }

  next(){
    this._pause();
    this._goToNext();
    this._play();
  }

  prev(){
    this._pause();
    this._goToPrev();
    this._play();
  }

  init(){
    this._initProps();
    this._initControls();
    this._initIndicators();
    this._initListeners();
    if (this.isPlaying) this.timerID = setInterval(() => this._goToNext(), this.interval);
  }
}

export default Carousel;