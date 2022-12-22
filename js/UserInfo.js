export class UserInfo {
  constructor() {
    this.userName = document.querySelector('.user-info__name');
    this.userJob = document.querySelector('.user-info__job');
  }

  updateUserInfo(name, author) {
    this.userName.textContent = name;
    this.userJob.textContent = author;
  }
}
