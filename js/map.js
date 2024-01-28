import { onActiveForm } from './form';
import { getData } from './network';
const form = document.querySelector('.ad-form');
const featuresFieldset = document.querySelector('#housing-features');
const address = document.querySelector('#address');
const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const PRICE = {
  'any': {min: 0, max: 100000},
  'low': {min: 0, max: 10000},
  'middle': {min: 10000, max: 50000},
  'high': {min: 50000, max: 100000},
};

const iconConfig = {
  url: './img/main-pin.svg',
  width: 52,
  height: 52,
  anchorX: 26,
  anchorY: 52,
};
const iconConfigDefault = {
  url: './img/pin.svg',
  width: 40,
  height: 40,
  anchorX: 20,
  anchorY: 40,
};
const ZOOM = 12;
const CITYCENTER = {
  lat: 35.68212,
  lng: 139.73581
};
const STARTCOORDINATE = {
  lat: 35.68212,
  lng: 139.73581
};

const createCustomPopup = ({ offer, author }) => {
  const popup = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = popup.cloneNode(true);
  popupElement.querySelector('.popup__title').textContent = offer.title;
  popupElement.querySelector('.popup__text--address').textContent = offer.address;
  popupElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  popupElement.querySelector('.popup__type').textContent = offer.type;
  popupElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} для ${offer.guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popupElement.querySelectorAll('.popup__feature').textContent = offer.features;
  popupElement.querySelector('.popup__description').textContent = offer.description;
  popupElement.querySelector('.popup__photo').src = offer.photos;
  popupElement.querySelector('.popup__avatar').src = author.avatar;

  return popupElement;

};

const map = L.map('map-canvas')
  .on('load', () => {
    onActiveForm();
  })
  .setView(CITYCENTER, ZOOM);

L.tileLayer(TILE_LAYER, {
  attribution: COPYRIGHT
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: iconConfig.url,
  iconSize: [iconConfig.width, iconConfig.height],
  iconAnchor: [iconConfig.anchorX, iconConfig.anchorY],
});

const DefaultPinIcon = L.icon({
  iconUrl: iconConfigDefault.url,
  iconSize: [iconConfigDefault.width, iconConfigDefault.height],
  iconAnchor: [iconConfigDefault.anchorX, iconConfigDefault.anchorY],
});

const marker = L.marker(STARTCOORDINATE, {
  draggable: true,
  icon: mainPinIcon,
});

marker.addTo(map);

address.value = `${CITYCENTER.lat.toFixed(5)}, ${CITYCENTER.lng.toFixed(5)}`;

marker.on('moveend', (evt) => {
  const coordinate = evt.target.getLatLng();
  address.value = `${coordinate.lat.toFixed(5)}, ${coordinate.lng.toFixed(5)}`;
});

form.addEventListener('submit', () => {
  marker.setLatLng(STARTCOORDINATE);
  map.setView(CITYCENTER, ZOOM);
});

const resetMap = () => {
  marker.setLatLng(STARTCOORDINATE);
  map.setView(CITYCENTER, ZOOM);
  map.closePopup();
};

const data = getData;
let blueMarkersLayer = [];

const firstRender = async () => {
  const allData = data.slice(0, 10);
  render(allData);
};

const render = (arr) => {
  blueMarkersLayer.forEach(el => {
    map.removeLayer(el);
  });
  blueMarkersLayer = [];
  arr.forEach((el) => {
    const blueMarker = L.marker(
      {
        lat: el.location.lat,
        lng: el.location.lng,
      },
      {
        icon: DefaultPinIcon,
      },
    );
    blueMarker
      .addTo(map)
      .bindPopup(createCustomPopup(el));
    blueMarkersLayer.push(blueMarker);
  });
};

firstRender();

const renderUpdate = (obj) => {
  console.log(obj)
  let filtered;
  if (obj['housing-type'] !== 'any') {
    filtered = data.filter(el => el.offer.type === obj['housing-type']);
  }

  if (obj['housing-price'] !== 'any') {
    filtered = (filtered || data).filter(el => el.offer.price <= PRICE[obj['housing-price']].max && el.offer.price > PRICE[obj['housing-price']].min);
    console.log(PRICE[obj['housing-price']])
  }

  if (obj['housing-rooms'] !== 'any') {
    filtered = (filtered || data).filter(el => el.offer.rooms === Number(obj['housing-rooms']));
  }

  if (obj['housing-guests'] !== 'any') {
    filtered = (filtered || data).filter(el => el.offer.guests === Number(obj['housing-guests']));
  }

  if (obj['housing-features'] !== 'any') {
    const x = Array.from(featuresFieldset.querySelectorAll('input[name ="features"]:checked'), (input) => input.value);
    console.log(1);
    filtered = (filtered || data).filter(x.forEach((element) => el => el.offer.features === element));
  }

  render((filtered || data).slice(0, 10));
};

export { resetMap, renderUpdate };
