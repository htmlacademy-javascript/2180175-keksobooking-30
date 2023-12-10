// Получение рандомного числа в диапазоне(min, max):

const getRandomInteger = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
  };

const getRandomArrayElement = (items) => items[getRandomInteger(0, items.length - 1)];

const getArray = (array) => {
    const count = getRandomInteger(1, array.length - 1);
    const newSet = new Set();
    
    while(newSet.size < count) {
      newSet.add(getRandomArrayElement(array))
    }
    
    return Array.from(newSet);
    // return array.splice(0, count); // просто вырезаем Х элементов
};

export{getRandomInteger, getRandomArrayElement, getArray}