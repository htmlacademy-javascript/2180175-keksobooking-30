import { resetMap, renderUpdate } from './map';
import { debounce } from './utils';
const form = document.querySelector('.ad-form');
const resetButton = form.querySelector('.ad-form__reset');
const mapForm = document.querySelector('.map__filters');
const TIMEOUT = 500;
const baseMapFilter = {
  'housing-type': 'any',
  'housing-price': 'any',
  'housing-rooms': 'any',
  'housing-guests': 'any',
  'housing-features': 'any',
};

const activeForm = () => {
  form.classList.remove('ad-form--disabled');
};

const activeFilter = () => {
  mapForm.classList.remove('ad-form--disabled');
};

const onActiveForm = () => {
  activeForm();
};

const onActiveFilter = () => {
  activeFilter();
};

resetButton.addEventListener('click', () => {
  resetMap();
  mapForm.reset();
});

mapForm.addEventListener('change', (evt) => {
  const fieldName = evt.target.name;
  baseMapFilter[fieldName] = evt.target.value;
  renderUpdate(baseMapFilter);
});


export { onActiveForm, onActiveFilter };
