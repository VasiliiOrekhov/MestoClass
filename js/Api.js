import { userApi } from './constants';
export class Api {
  constructor(options) {
    this.url = options.baseUrl;
    this.headers = options.headers;
    this.getCards();
    this.myId = null;
  }

  getUserProfile() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
    }).then((res) => res.json());
  }

  async changeUserProfile(name, author) {
    const result = await fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: author,
      }),
    });
    return result;
  }

  async getId() {
    if (this.myId) {
      console.log('из памяти');
      return this.myId;
    }
    const { _id } = await this.getUserProfile();
    this.myId = _id;
    return _id;
  }

  getCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
    }).then((res) => res.json());
  }

  async addCards(name, link) {
    return await fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    });
  }

  async deleteCard(cardId) {
    return await fetch(`${this.url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    });
  }

  async like(cardId) {
    return await fetch(`${this.url}/cards/like/${cardId}`, {
      method: 'PUT',
      headers: this.headers,
    });
  }

  async dislike(cardId) {
    return await fetch(`${this.url}/cards/like/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    });
  }
}

export const api = new Api(userApi);
