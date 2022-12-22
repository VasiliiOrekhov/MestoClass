export class OpenCardPopup {
  constructor() {
    this.imgIncrease = document.querySelector('.popup__img_increase');
    this.popup = document.querySelector('.popup-open_img');
    this.placesList = document.querySelector('.places-list');
    this.buttonClose = this.popup.querySelector('.popup__close');
    this.background = document.querySelector('.popup-background_card');
    this.listner();
  }

  open(event) {
    if (event.target.classList.contains('place-card__image')) {
      this.imgIncrease.src = event.target.style.backgroundImage.slice(5, -2);
      this.popup.classList.toggle('popup-opened-img');
      this.background.classList.toggle('popup-background-opened');
    }
  }

  close() {
    this.popup.classList.toggle('popup-opened-img');
    this.background.classList.toggle('popup-background-opened');
  }

  listner() {
    this.placesList.addEventListener('click', this.open.bind(this));
    this.buttonClose.addEventListener('click', this.close.bind(this));
    this.background.addEventListener('click', this.close.bind(this));
  }
}
