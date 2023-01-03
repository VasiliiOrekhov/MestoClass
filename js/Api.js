export class Api {
  constructor(options) {
    this.url = options.baseUrl;
    this.headers = options.headers;
    this.getCards();
  }

  getUserProfile() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
    }).then((res) => res.json());
  }
  // первый вариант
  //   changeUserProfile(name, author) {
  //     return fetch(`${this.url}/users/me`, {
  //       method: 'PATCH',
  //       headers: this.headers,
  //       body: JSON.stringify({
  //         name: name,
  //         about: author,
  //       }),
  //     });
  //   }
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

  async deslike(cardId) {
    return await fetch(`${this.url}/cards/like/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    });
  }
}

export const api = new Api({
  baseUrl: 'https://nomoreparties.co/cohort11',
  headers: {
    authorization: 'e5cf0ae6-c049-4812-8bb5-267f014b9213',
    'Content-Type': 'application/json',
  },
});
