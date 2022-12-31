import { Card } from './Card';

export class CardList {
  constructor(initialCards, openCardPopupCallback) {
    this.initialCards = initialCards;
    this.placesList = document.querySelector('.places-list');
    this.openCardPopupCallback = openCardPopupCallback;
    // this.deleteCardCallback = deleteCardCallback;
  }

  init(cardContainer) {
    const container = document.createDocumentFragment();
    // this.initialCards.forEach((el) => {
    cardContainer.forEach((el) => {
      const card = new Card(
        el.name,
        el.link,
        el.likes,
        el._id,
        this.openCardPopupCallback
        // this.deleteCardCallback
      );
      const node = card.create();

      container.append(node);
    });
    this.render(container);
  }

  addCard = (name, link) => {
    const instance = new Card(name, link, this.openCardPopupCallback);
    const node = instance.create();
    this.render(node);
  };

  render(node) {
    this.placesList.append(node);
  }
}
