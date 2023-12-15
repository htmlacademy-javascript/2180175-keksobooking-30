import { typeList } from './getting-data';

const thumbnailTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const container = document.querySelector('#map-canvas');

const createThumbnail = (order) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.popup__title').textContent = order.offer.title;
  thumbnail.querySelector('.popup__text--address').textContent = order.offer.address;
  thumbnail.querySelector('.popup__text--price').textContent = `${order.offer.price} ₽/ночь`;
  thumbnail.querySelector('.popup__type').textContent = typeList[order.offer.type];
  thumbnail.querySelector('.popup__text--capacity').textContent = `${order.offer.rooms} для ${order.offer.guests} гостей`;
  thumbnail.querySelector('.popup__text--time').textContent = `Заезд после ${order.offer.checkin}, выезд до ${order.offer.checkout}`;
  thumbnail.querySelectorAll('.popup__feature').textContent = order.offer.features;
  thumbnail.querySelector('.popup__description').textContent = order.offer.description;
  thumbnail.querySelector('.popup__photos').src = order.offer.photos;
  thumbnail.querySelector('.popup__avatar').src = order.author.avatar;

  return thumbnail;
};

const renderThumbnails = (orderList) => {
  const fragment = document.createDocumentFragment();
  orderList.forEach((order) => {
    fragment.append(createThumbnail(order));
  });
  container.append(fragment);
};

export { renderThumbnails };
