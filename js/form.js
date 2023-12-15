const form = document.querySelector('.ad-form');
const formFieldset = form.querySelector('.ad-form-header');

const mapForm = document.querySelector('.map__filters');
const mapType = mapForm.querySelector('#housing-type');
const mapPrice = mapForm.querySelector('#housing-price');
const mapRooms = mapForm.querySelector('#housing-rooms');
const mapGuests = mapForm.querySelector('#housing-guests');
const mapFeatures = mapForm.querySelector('#housing-features');


const activeInactiveState = () => {
  form.classList.add('ad-form--disabled');
  mapForm.classList.add('ad-form--disabled');
  formFieldset.disabled = true;
  mapType.disabled = true;
  mapPrice.disabled = true;
  mapRooms.disabled = true;
  mapGuests.disabled = true;
  mapFeatures.disabled = true;
};

const activeForm = () => {
  form.classList.remove('ad-form--disabled');
  formFieldset.disabled = false;
};

const activeFilter = () => {
  mapForm.classList.remove('ad-form--disabled');
  mapType.disabled = false;
  mapPrice.disabled = false;
  mapRooms.disabled = false;
  mapGuests.disabled = false;
  mapFeatures.disabled = false;
};

const onActiveInactiveState = () => {
  activeInactiveState();
};

const onActiveForm = () => {
  activeForm();
};

const onActiveFilter = () => {
  activeFilter();
};

export { onActiveInactiveState, onActiveForm, onActiveFilter };
