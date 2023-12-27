import { MIN_INTEGER, MAX_INTEGER, RANDOM_TITLES, MAX_PRICE, TIME, TYPES_VALUES, MAX_ROOMS, MAX_GUESTS, FEATURES, DESCRIPTION_BLOCK, PHOTOS } from './data.js';
import { getRandomInteger, getRandomArrayElement, getArray, getRandomFloat } from './utils.js';

const typeList = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const createAuthor = () => {
  let randomIndexAuthor = getRandomInteger(MIN_INTEGER, MAX_INTEGER);

  if (randomIndexAuthor.toString().length !== 2) {
    randomIndexAuthor = `0${getRandomInteger(MIN_INTEGER, MAX_INTEGER)}`;
  }

  return {
    avatar: (`img/avatars/user${randomIndexAuthor}.png`),
  };
};

const createLocation = () => {
  const lat = getRandomFloat(35.65, 35.7).toFixed(5);
  const lng = getRandomFloat(139.7, 139.8).toFixed(5);
  const location = {
    lat,
    lng
  };
  return location;
};

const createOffer = () => ({
  title: getRandomArrayElement(RANDOM_TITLES),
  address: createLocation().lat,
  price: getRandomInteger(1, MAX_PRICE),
  type: getRandomArrayElement(TYPES_VALUES),
  rooms: getRandomInteger(1, MAX_ROOMS),
  guests: getRandomInteger(1, MAX_GUESTS),
  checkin: getRandomArrayElement(TIME),
  checkout: getRandomArrayElement(TIME),
  features: getArray(FEATURES),
  description: DESCRIPTION_BLOCK,
  photos: getArray(PHOTOS),
});

const getMocks = function (idCount) {
  const result = [];
  for (let i = 0; i < idCount; i++) {
    result.push({
      author: createAuthor(),
      offer: createOffer(),
      location: createLocation()
    });
  }
  return result;
};

export { getMocks, typeList, createLocation, createOffer, createAuthor };
