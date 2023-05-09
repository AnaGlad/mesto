export default class UserInfo {
  constructor({ nameSelector, occupationSelector, avatarSelector, userId }) {
    this._name = document.querySelector(nameSelector);
    this._occupation = document.querySelector(occupationSelector);
    this._avatar = document.querySelector(avatarSelector);
    this._id = userId;
  }

  getUserInfo() {
    const userInfo = {};
    userInfo.name = this._name.textContent;
    userInfo.occupation = this._occupation.textContent;
    userInfo.id = this._id;
    return userInfo;
  }

  setUserInfo({ name, occupation }) {
    this._name.textContent = name;
    this._occupation.textContent = occupation;
  }

  setUserAvatar(url) {
    this._avatar.style.backgroundImage = `url('${url}')`;
  }
}
