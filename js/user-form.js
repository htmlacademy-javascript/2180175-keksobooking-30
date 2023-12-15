const form = document.querySelector('.ad-form');
const roomNumber = document.querySelector('#room_number');
const guests = document.querySelector('#capacity');
const pristine = new Pristine(form);

const validateData = () => {
  const isValid = pristine.validate();
  if (isValid) {
    console.log('Форма валидна');
  } else {
    console.log('Форма невалидна');
  }
};

const validateForm = () => {
  if (roomNumber.value === 1) {

  }
};

const onValidateData = () => {
  validateData();
};

const handlerLaunch = () => {
  form.addEventListener('submit', onValidateData());
};

export { handlerLaunch, validateForm };
