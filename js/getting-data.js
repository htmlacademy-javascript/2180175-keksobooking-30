import { MIN_INTEGER, MAX_INTEGER, RANDOM_TITLES, MAX_PRICE, TIME, TYPES_VALUES, MAX_ROOMS, MAX_GUESTS, FEATURES, DESCRIPTION_BLOCK, PHOTOS } from './data.js';
import { getRandomInteger, getRandomArrayElement, getArray } from './utils.js';

const createAuthor = () => ({
  avatar: `img/avatars/user${getRandomInteger(MIN_INTEGER, MAX_INTEGER)}.png`,
});

const createLocation = () => ({
  lat: getRandomInteger(35.65000, 35.70000),
  lng: getRandomInteger(139.70000, 139.80000),
});

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
    result.push(createAuthor(), createOffer(), createLocation());
  }
  return result;
};

export { getMocks };
