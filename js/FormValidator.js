export class FormValidator {
  constructor(form) {
    this.form = form;
    this.setEventListeners();
  }

  checkInputValidity(event) {
    event.preventDefault();
    const formEvent = event.target;
    const validError = formEvent.nextSibling.nextSibling;
    if (formEvent.validity.valid) {
      validError.textContent = '';
      this.setSubmitButtonState();
    } else {
      if (formEvent.validity.valueMissing) {
        // Если поле пустое
        validError.textContent = 'Это обязательное поле';
      } else if (formEvent.validity.tooShort) {
        // Если содержимое короткое
        validError.textContent = 'Должно быть от 2 до 30 символов';
      } else if (formEvent.validity.patternMismatch) {
        // Если в поле link не ссылка
        validError.textContent = 'Здесь должна быть ссылка';
      }
    }
  }

  setSubmitButtonState() {
    const popupButton = this.form.querySelector('.popup__button');
    const popupInput = this.form.querySelectorAll('.popup__input');
    if (popupInput[0].validity.valid && popupInput[1].validity.valid) {
      popupButton.removeAttribute('disabled');
      popupButton.classList.add('popup__button_no');
    } else {
      popupButton.setAttribute('disabled', true);
      popupButton.classList.remove('popup__button_no');
    }
  }

  setEventListeners() {
    this.form.addEventListener('input', this.checkInputValidity.bind(this));
  }
}
