export class PlacePopup {
  constructor(newCardCallback) {
    this.popup = document.querySelector('.popup-place');
    this.background = document.querySelector('.popup-background_place');
    this.buttonOpen = document.querySelector('.user-info__button');
    this.buttonClose = this.popup.querySelector('.popup__close');
    this.buttonJoin = this.popup.querySelector('.popup__button_card');
    this.form = this.popup.querySelector('.popup__form_card');
    this.listner();
    this.newCardCallback = newCardCallback;
    this.allValidError = document.querySelectorAll('.popup__error');
  }

  handle() {
    this.popup.classList.toggle('popup-opened');
    this.background.classList.toggle('popup-background-opened');
    this.form.reset();
    this.allValidError.forEach(function (item) {
      item.textContent = '';
    });
  }

  listner() {
    this.buttonOpen.addEventListener('click', this.handle.bind(this)); //стрелочная функция или bind
    this.buttonClose.addEventListener('click', () => this.handle());
    this.background.addEventListener('click', this.handle.bind(this));
    this.buttonJoin.addEventListener('click', this.saveInfo.bind(this));
    this.buttonJoin.addEventListener('click', this.handle.bind(this));
  }

  saveInfo(event) {
    event.preventDefault();
    const name = this.form.elements.name.value;
    const link = this.form.elements.link.value;
    this.newCardCallback(name, link);
  }
}
