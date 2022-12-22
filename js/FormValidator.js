export class FormValidator {
  constructor() {
    this.formProfile = document.forms.profile;
    this.formCard = document.forms.new;
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
      //как оптимизировать?
      popupButton.removeAttribute('disabled');
      popupButton.classList.add('popup__button_no');
    } else {
      popupButton.setAttribute('disabled', true);
      popupButton.classList.remove('popup__button_no');
    }
  }

  setEventListeners() {
    this.formCard.addEventListener('input', this.checkInputValidity);
    this.formCard.addEventListener('input', this.setSubmitButtonState);
    this.formProfile.addEventListener('input', this.checkInputValidity);
    this.formProfile.addEventListener('input', this.setSubmitButtonState);
  }
}
