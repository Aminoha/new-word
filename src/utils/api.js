class Api {
  constructor(path, token) {
    this._path = path;
    this._token = token;
  }

  _getHeaders() {
    return {
      "Content-Type": "application/json",
      authorization: this._token,
    };
  }

  _getJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCardList() {
    return fetch(`${this._path}/cards`, {
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  getUserInfo() {
    return fetch(`${this._path}/users/me`, {
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  setUserInfo({ name, about }) {
    return fetch(`${this._path}/users/me`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: `${name}`,
        about: `${about}`,
      }),
    }).then(this._getJson);
  }

  setUserAvatar(data) {
    return fetch(`${this._path}/users/me/avatar`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify(data),
    }).then(this._getJson);
  }

  addCard({ name, link }) {
    return fetch(`${this._path}/cards`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: `${name}`,
        link: `${link}`,
      }),
    }).then(this._getJson);
  }

  deleteCard(cardId) {
    return fetch(`${this._path}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  putLike(cardId) {
    return fetch(`${this._path}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  deleteLike(cardId) {
    return fetch(`${this._path}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  getWord(word) {
    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, {

    }).then(this._getJson);

      // .then((response) => console.log(response))
      // .catch((err) => console.error(err));
  }
}

const api = new Api(
  "https://mesto.nomoreparties.co/v1/cohort-61",
  "10e895f5-9c21-4560-ae6a-6a7ed41c5744"
);

export default api;
