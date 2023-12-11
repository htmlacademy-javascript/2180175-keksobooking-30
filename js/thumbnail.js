import{createOffer, createAuthor} from './getting-data';

const thumbnailTemplate = document.querySelector('#card')
.content
.querySelector('.popup');

const container = document.querySelector('#map-canvas');

const createThumbnail = (title, address, price, type, rooms, guests, checkin, checkout, features, description, photos, avatar) => {
const thumbnail = thumbnailTemplate.cloneNode(true);

thumbnail.querySelector('.popup__title').textContent = title;
thumbnail.querySelector('.popup__text--address').textContent = address;
thumbnail.querySelector('.popup__text--price').textContent = price + ' ₽/ночь';
thumbnail.querySelector('.popup__type').textContent = type;
thumbnail.querySelector('.popup__text--capacity').textContent = rooms + ' для ' + guests + ' гостей';
thumbnail.querySelector('.popup__text--time').textContent = 'Заезд после ' + checkin + ', выезд до ' + checkout;
thumbnail.querySelectorAll('.popup__feature').textContent = features;
thumbnail.querySelector('.popup__description').textContent = description;
thumbnail.querySelector('.popup__photos').src = photos;
thumbnail.querySelector('.popup__avatar').src = avatar;
};

const renderThumbnails = (data) => {
  const fragment = document.createDocumentFragment();
  data.forEach((data) => {
    const thumbnail = createThumbnail(createOffer().title, createOffer().address, createOffer().price, createOffer().type,
    createOffer().rooms, createOffer().guests, createOffer().checkin, createOffer().checkout,
    createOffer().features, createOffer().features, createOffer().description, createOffer().photos, createAuthor().avatar);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};

export{renderThumbnails};
