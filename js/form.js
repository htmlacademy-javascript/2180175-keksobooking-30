import { resetMap, renderUpdate } from './map';
import { debounce } from './utils';
const TIMEOUT = 500;
const form = document.querySelector('.ad-form');
const resetButton = form.querySelector('.ad-form__reset');
const mapForm = document.querySelector('.map__filters');

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

const onChange = () => {
  renderUpdate();
};

mapForm.addEventListener('change', debounce(onChange, TIMEOUT));

export { onActiveForm, onActiveFilter };
