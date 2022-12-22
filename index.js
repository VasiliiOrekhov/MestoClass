import { Card } from './js/Card';
import { CardList } from './js/CardList';
import { FormValidator } from './js/FormValidator';
import { UserInfo } from './js/UserInfo';
import { OpenCardPopup } from './js/OpenCardPopup';
import { initialCards } from './js/constants';
import { PlacePopup } from './js/PlacePopup';
import { ProfilePopup } from './js/ProfilePopup';

const card = new Card();

const cardList = new CardList(initialCards);
cardList.init();

const userInfo = new UserInfo();

const formValidator = new FormValidator();

//сохранение данных попапа
const newCardCallback = (name, link) => {
  cardList.addCard(name, link);
};
const placePopup = new PlacePopup(newCardCallback);

const editProfileCallback = (name, author) => {
  userInfo.updateUserInfo(name, author);
};
const profilePopup = new ProfilePopup(editProfileCallback);

const openCardPopup = new OpenCardPopup();
