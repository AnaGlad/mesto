export default class UserInfo {
  constructor({ nameSelector, occupationSelector }) {
    this._name = document.querySelector(nameSelector);
    this._occupation = document.querySelector(occupationSelector);
  }

  getUserInfo() {
    const userInfo = {};
    userInfo.name = this._name.textContent;
    userInfo.occupation = this._occupation.textContent;
    return userInfo;
  }

  setUserInfo({ name, occupation }) {
    this._name.textContent = name;
    this._occupation.textContent = occupation;
  }
}
