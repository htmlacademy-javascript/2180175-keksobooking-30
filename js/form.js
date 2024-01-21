import { resetMap } from './map';
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


export { onActiveForm, onActiveFilter };
