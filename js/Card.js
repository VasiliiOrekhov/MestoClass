import { api } from './Api';
export class Card {
  constructor(name, link, like, cardId, openCardPopupCallback) {
    this.name = name;
    this.link = link;
    this.likes = like;
    this.cardId = cardId;
    this.likeButton = null;
    this.deleteButton = null;
    this.openCardPopupCallback = openCardPopupCallback;
  }

  async like() {
    if (this.likes.some((el) => el._id === '102b96759d35d1e0dc4e16bd')) {
      try {
        const result = await api.deslike(this.cardId);
        const { likes } = await result.json();
        this.card.querySelector('.like-counter').textContent = likes.length;
        this.likeButton.classList.toggle('place-card__like-icon_liked');
        this.likes = likes;
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const result = await api.like(this.cardId);
        const { likes } = await result.json();
        this.card.querySelector('.like-counter').textContent = likes.length;
        this.likeButton.classList.toggle('place-card__like-icon_liked');
        this.likes = likes;
      } catch (error) {
        console.log(error);
      }
    }
  }

  async remove(event) {
    event.stopImmediatePropagation(); //для остановки срабатывания на других областях
    try {
      const result = await api.deleteCard(this.cardId);
      await result.json(); //ждем ответ от сервера
      this.card.remove();
    } catch (error) {
      console.log(error);
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
            <div class="like-counter">${this.likes.length}</div>
        </div>
    </div>`;

    //превращает строку карточки вnode
    const node = document.createRange().createContextualFragment(template);
    this.card = node.firstChild;
    this.likeButton = this.card.querySelector('.place-card__like-icon');
    this.deleteButton = this.card.querySelector('.place-card__delete-icon');
    this.imgInCard = this.card.querySelector('.place-card__image');
    this.likes.forEach((el) => {
      if (el._id === '102b96759d35d1e0dc4e16bd') {
        this.likeButton.classList.toggle('place-card__like-icon_liked');
      }
    });
    this.listners();
    return node;
  }
  listners() {
    this.imgInCard.addEventListener('click', () => this.openCardPopupCallback(this.imgInCard));
    this.likeButton.addEventListener('click', () => this.like());
    this.deleteButton.addEventListener('click', (event) => this.remove(event));
  }
}
