const cardContainer = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const selectionHousingNames = (type) => {
  const housingNames = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
    hotel: 'Отель'
  };
  return housingNames[type];
};

const countRoomsAndQuests = (rooms, quests) => {
  let roomPhrase = 'комнат';
  if(rooms % 10 === 1 && rooms %100 !== 11) {
    roomPhrase = 'комната';
  }
  if((rooms % 10 >= 2 && rooms % 10 <= 4) && (rooms % 100 !== 12 && rooms % 100 !== 13 && rooms % 100 !== 14)) {
    roomPhrase = 'комнаты';
  }

  const questPhrase = (quests % 10 === 1 && quests % 100 !== 11) ? 'гостя' : 'гостей';

  return `${rooms} ${roomPhrase} для ${quests} ${questPhrase}`;
};

const selectionFeatures = (list, features) => {
  const modifiers = features.map((feature) => `popup__feature--${feature}`);
  list.forEach((featuresListItem) => {
    const modifier = featuresListItem.classList[1];
    if(!modifiers.includes(modifier)) {
      featuresListItem.remove();
    }
  });
};

const addPhotos = (list, photos) => {
  list.innerHTML = '';
  photos.forEach((photo) => {
    list.insertAdjacentHTML('beforeend', `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
  });
};


const checkElement = (element, value) => {
  if (value){
    element.textContent = value;
  } else {
    element.remove();
  }
};

const createCard = ({author, offer}) => {
  const cardItem = cardTemplate.cloneNode(true);

  checkElement(cardItem.querySelector('.popup__title'), offer.title);
  checkElement(cardItem.querySelector('.popup__text--address'), offer.address);
  cardItem.querySelector('.popup__text--price').innerHTML = `${offer.price} <span>₽/ночь</span>`;
  checkElement(cardItem.querySelector('.popup__type'), selectionHousingNames(offer.type));
  cardItem.querySelector('.popup__text--capacity').innerHTML = countRoomsAndQuests(offer.rooms, offer.guests);
  cardItem.querySelector('.popup__text--time').innerHTML = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  selectionFeatures(cardItem.querySelectorAll('.popup__feature'), offer.features);
  checkElement(cardItem.querySelector('.popup__description'), offer.description);
  addPhotos(cardItem.querySelector('.popup__photos'), offer.photos);
  cardItem.querySelector('.popup__avatar').src = author.avatar;

  return cardItem;
};

const renderCards = (cards) => {
  cards.length = 1; // выведем только первый элемент массива (по условию задания)
  const cardFragment = document.createDocumentFragment();
  cards.forEach((card) => {
    const cardArticle = createCard(card);
    cardFragment.append(cardArticle);
  });
  cardContainer.append(cardFragment);
};

export {renderCards};

