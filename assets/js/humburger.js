class Hamburger {
  constructor (params) {
    this.hamb = params.hamb;
    this.menu = params.menu;
    this.links = params.links;
  }

  _initProps(){
    this.hamb = document.querySelector('.hamburger');
    this.menu = document.querySelector('.header__navbar-menu');
    this.links = document.querySelectorAll('.header__navbar-link');

  }

  _initListeners(){
    if (screen.width < 992){
      for(let link of this.links){
        link.addEventListener('click', this.show.bind(this));
      }
    };

    this.hamb.addEventListener('click', this.show.bind(this));
  }

  show(){
    this.hamb.classList.toggle('change');
    this.menu.classList.toggle('show');
  }

  init(){
    this._initProps();
    this._initListeners();
  }
}

export default Hamburger;