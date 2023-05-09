export default class Api {
  constructor(options) {
    this._options = options;
  }

  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-65/cards', {
      headers: {
        authorization: this._options.authorization,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(() => {
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  getUserInfo() {
    return fetch('https://nomoreparties.co/v1/cohort-65/users/me', {
      method: 'GET',
      headers: {
        authorization: this._options.authorization,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(() => {
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  changeAvatar(url) {
    return fetch(
      'https://mesto.nomoreparties.co/v1/cohort-65/users/me/avatar',
      {
        method: 'PATCH',
        headers: {
          authorization: this._options.authorization,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          avatar: url,
        }),
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(() => {
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  changeUserInfo(name, occupation) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-65/users/me', {
      method: 'PATCH',
      headers: {
        authorization: this._options.authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        about: occupation,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(() => {
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  postNewCard(cardName, url) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-65/cards', {
      method: 'POST',
      headers: {
        authorization: this._options.authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: cardName,
        link: url,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(() => {
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  putLike(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-65/cards/${cardId}/likes`,
      {
        method: 'PUT',
        headers: {
          authorization: this._options.authorization,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(() => {
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  deleteCard(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-65/cards/${cardId}`,
      {
        method: 'DELETE',
        headers: {
          authorization: this._options.authorization,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(() => {
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  deleteLike(cardId) {
    return fetch(
      `https://mesto.nomoreparties.co/v1/cohort-65/cards/${cardId}/likes`,
      {
        method: 'DELETE',
        headers: {
          authorization: this._options.authorization,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(() => {
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
}
