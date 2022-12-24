export class FormValidator {
  constructor() {
    this.form = document.querySelectorAll('.popup__form');
    this.setEventListeners();
  }

  checkInputValidity(event) {
    const formEvent = event.target;
    const validError = formEvent.nextSibling.nextSibling;
    if (formEvent.validity.valid) {
      validError.textContent = '';
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
    const popupButton = this.querySelector('.popup__button');
    const popupInput = this.querySelectorAll('.popup__input');
    if (popupInput[0].validity.valid && popupInput[1].validity.valid) {
      popupButton.removeAttribute('disabled');
      popupButton.classList.add('popup__button_no');
    } else {
      popupButton.setAttribute('disabled', true);
      popupButton.classList.remove('popup__button_no');
    }
  }

  setEventListeners() {
    this.form.forEach((el) => {
      el.addEventListener('input', this.checkInputValidity);
    });
    this.form.forEach((el) => {
      el.addEventListener('input', this.setSubmitButtonState);
    });
  }
}
