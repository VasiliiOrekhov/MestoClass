export class Card {
  constructor(name, link, openCardPopupCallback) {
    this.name = name;
    this.link = link;
    this.likeButton = null;
    this.deleteButton = null;
    this.openCardPopupCallback = openCardPopupCallback;
  }

  like() {
    this.likeButton.classList.toggle('place-card__like-icon_liked');
  }

  remove() {
    this.card.remove();
  }

  create() {
    const template = `<div class="place-card">
        <div class="place-card__image"
            style="background-image: url(${this.link})">
            <button class="place-card__delete-icon"></button>
        </div>
        <div class="place-card__description">
            <h3 class="place-card__name">${this.name}</h3>
            <button class="place-card__like-icon"></button>
        </div>
    </div>`;

    //превращает строку карточки вnode
    const node = document.createRange().createContextualFragment(template);
    this.card = node.firstChild;
    this.likeButton = this.card.querySelector('.place-card__like-icon');
    this.deleteButton = this.card.querySelector('.place-card__delete-icon');
    this.imgInCard = this.card.querySelector('.place-card__image');
    this.listners();
    return node;
  }
  listners() {
    this.imgInCard.addEventListener('click', () => this.openCardPopupCallback(this.imgInCard));
    this.likeButton.addEventListener('click', () => this.like());
    this.deleteButton.addEventListener('click', () => this.remove());
  }
}
