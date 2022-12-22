export class Card {
  constructor(name, link) {
    this.name = name;
    this.link = link;
    this.placesList = document.querySelector('.places-list');
    this.listner();
  }

  like(event) {
    if (event.target.classList.contains('place-card__like-icon')) {
      event.target.classList.toggle('place-card__like-icon_liked');
    }
  }

  remove(event) {
    if (event.target.classList.contains('place-card__delete-icon')) {
      const cardDel = event.target.parentNode.parentNode;
      cardDel.remove();
    }
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
    return node;
  }
  listner() {
    this.placesList.addEventListener('click', this.like);
    this.placesList.addEventListener('click', this.remove);
  }
}
