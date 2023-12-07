import { MIN_INTEGER, MAX_INTEGER, TIME, TYPES_VALUES, FEATURES, PHOTOS } from './data.js'

// Получение рандомного числа в диапазоне(min, max):

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (items) => items[getRandomInteger(0, items.length - 1)];

const getArray = (array) => {
  const maxLength = features.length;
  const lengthOfArray = getRandomInteger(1, maxLength);
  const array = [];
  
  for(let i = 0;i < lengthOfArray;i++) {
    const indexOfEl = getRandomInteger(0, 5);
    const el = features[indexOfEl];
    
    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

const createAuthor = () => ({
  avatar: `img/avatars/user${getRandomInteger(MIN_INTEGER, MAX_INTEGER)}.png`,
});

const createOffer = () => ({
  title: 'Рекомендации',
  address: location.lat,
  price: getRandomInteger(1, 500),
  type: getRandomArrayElement(TYPES_VALUES),
  rooms: getRandomInteger(1,250),
  guests: getRandomInteger(1, 1000),
  checkin: getRandomArrayElement(TIME),
  checkout: getRandomArrayElement(TIME),
  features: getArray(FEATURES),
  description: 'Помещение хорошее. Красивое и опрятное.',
  photos: getRandomArrayElement(PHOTOS),
});

const createLocation = () => ({
  lat: getRandomInteger(35.65000, 35.70000),
  lng: getRandomInteger(139.70000, 139.80000),
});