import { CardList } from './js/CardList';
import { UserInfo } from './js/UserInfo';
import { OpenCardPopup } from './js/OpenCardPopup';
import { initialCards } from './js/constants';
import { PlacePopup } from './js/PlacePopup';
import { ProfilePopup } from './js/ProfilePopup';
import { getLink } from './js/utils';
import { api } from './js/Api';

const openCardPopupCallback = (nodeImg) => {
  const imgUrl = getLink(nodeImg.style.backgroundImage);
  openCardPopup.open(imgUrl);
};

const userInfo = new UserInfo();

const openCardPopup = new OpenCardPopup();

//загрузка с сервера данных профиля при открытии страницы
function getUserProfile() {
  api
    .getUserProfile()
    .then((res) => {
      const name = res.name;
      const author = res.about;
      userInfo.updateUserInfo(name, author);
    })
    .catch((err) => console.log(`Данные профиля с сервера не получены. Ошибка: ${err}`));
}
getUserProfile();

const cardList = new CardList(initialCards, openCardPopupCallback);

//изменение данных профиля и отправка данных на сервер вариант 1
// const editProfileCallback = (name, author) => {
//   api
//     .changeUserProfile(name, author)
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         throw new Error(res.status);
//       }
//     })
//     .then(({ name, about }) => userInfo.updateUserInfo(name, about))
//     .catch((err) => console.log(`Ошибка:${err}`));
// };
const editProfileCallback = async (name, author) => {
  try {
    //до запроса на сервер
    profilePopup.changeButton();
    const result = await api.changeUserProfile(name, author);
    const { name: nameUserInfo, about } = await result.json();
    //вернулся результат с сервера
    userInfo.updateUserInfo(nameUserInfo, about);
    profilePopup.handle();
  } catch (error) {
    console.log(error);
  }
};

// загрузка карточек с сервера при открытии страницы
api
  .getCards()
  .then((res) => {
    cardList.init(res);
  })
  .catch((err) => console.log(`Данные карточек с сервера не получены. Ошибка: ${err}`));

//добавление новой карточки
const newCardCallback = async (name, link) => {
  try {
    placePopup.changeButton();
    const result = await api.addCards(name, link);
    const { name: returnName, link: returnLink } = await result.json();
    cardList.addCard(returnName, returnLink);
    placePopup.handle();
  } catch (error) {
    console.log(error);
  }
};

const profilePopup = new ProfilePopup(editProfileCallback);
const placePopup = new PlacePopup(newCardCallback);
