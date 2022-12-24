import { CardList } from './js/CardList';
import { UserInfo } from './js/UserInfo';
import { OpenCardPopup } from './js/OpenCardPopup';
import { initialCards } from './js/constants';
import { PlacePopup } from './js/PlacePopup';
import { ProfilePopup } from './js/ProfilePopup';
import { getLink } from './js/utils';

//сохранение данных попап
const newCardCallback = (name, link) => {
  cardList.addCard(name, link);
};

const editProfileCallback = (name, author) => {
  userInfo.updateUserInfo(name, author);
};

const openCardPopupCallback = (nodeImg) => {
  const imgUrl = getLink(nodeImg.style.backgroundImage);
  openCardPopup.open(imgUrl);
};

const userInfo = new UserInfo();
const cardList = new CardList(initialCards, openCardPopupCallback);
cardList.init();
new PlacePopup(newCardCallback);
new ProfilePopup(editProfileCallback);
const openCardPopup = new OpenCardPopup();
