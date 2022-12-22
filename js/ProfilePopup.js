export class ProfilePopup {
  constructor(editProfileCallback) {
    this.popup = document.querySelector('.popup-profile');
    this.background = document.querySelector('.popup-background_profile');
    this.buttonOpen = document.querySelector('.user-info__profile_button');
    this.buttonClose = this.popup.querySelector('.popup__close');
    this.buttonSave = this.popup.querySelector('.popup__button_profile');
    this.form = this.popup.querySelector('.popup__form');
    this.editProfileCallback = editProfileCallback;
    this.listner();
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
    this.buttonOpen.addEventListener('click', this.handle.bind(this));
    this.buttonClose.addEventListener('click', this.handle.bind(this));
    this.background.addEventListener('click', this.handle.bind(this));
    this.buttonSave.addEventListener('click', this.saveInfo.bind(this));
    this.buttonSave.addEventListener('click', this.handle.bind(this));
  }

  saveInfo(event) {
    event.preventDefault();
    const name = this.form.elements.name.value;
    const author = this.form.elements.author.value;
    this.editProfileCallback(name, author);
  }
}
