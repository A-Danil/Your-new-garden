class Hamburger {
  constructor (params) {
    this.hamb = params.hamb;
    this.menu = params.menu;
  }

  _initProps(){
    this.hamb = document.querySelector('.hamburger');
    this.menu = document.querySelector('.header__navbar-menu');
  }

  _initListeners(){
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