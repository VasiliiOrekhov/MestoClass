import { Card } from './Card';

export class CardList {
  constructor(openCardPopupCallback) {
    this.placesList = document.querySelector('.places-list');
    this.openCardPopupCallback = openCardPopupCallback;
  }

  init(cardContainer) {
    const container = document.createDocumentFragment();
    cardContainer.forEach(({ name, link, likes, _id }) => {
      const card = new Card(name, link, likes, _id, this.openCardPopupCallback);
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
