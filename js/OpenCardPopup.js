export class OpenCardPopup {
  constructor() {
    this.popup = document.querySelector('.popup-open_img');
    this.imgIncrease = this.popup.querySelector('.popup__img_increase');
    this.buttonClose = this.popup.querySelector('.popup__close');
    this.background = document.querySelector('.popup-background_card');
    this.listners();
  }

  open(url) {
    this.imgIncrease.src = url;
    this.popup.classList.toggle('popup-opened-img');
    this.background.classList.toggle('popup-background-opened');
  }

  close() {
    this.popup.classList.toggle('popup-opened-img');
    this.background.classList.toggle('popup-background-opened');
  }

  listners() {
    this.buttonClose.addEventListener('click', this.close.bind(this));
    this.background.addEventListener('click', this.close.bind(this));
  }
}
