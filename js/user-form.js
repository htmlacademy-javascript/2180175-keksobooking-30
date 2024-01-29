import { renderSuccess, renderError } from './popup';
const form = document.querySelector('.ad-form');
const roomNumber = document.querySelector('#room_number');
const guestCount = document.querySelector('#capacity');
const houseType = document.querySelector('#type');
const priceinput = document.querySelector('#price');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

const zeroGuest = guestCount[3];
const oneGuest = guestCount[2];
const twoGuest = guestCount[1];
const threeGuest = guestCount[0];

const prisitineValidate = () => {
  const pristine = new Pristine(form, {
    classTo: 'ad-form__element',
    errorTextParent: 'ad-form__element',
    errorClass: 'ad-form__element--invalid'
  });
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const valid = pristine.validate();
    const formData = new FormData(evt.target);
    if (valid) {
      fetch(
        'https://30.javascript.htmlacademy.pro/keksobooking',
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (response.ok) {
            renderSuccess();
          }
        })
        .catch(() => {
          renderError();
        });
    }
  });
};


const offSeatNumber = () => {
  zeroGuest.disabled = true;
  oneGuest.disabled = false;
  twoGuest.disabled = true;
  threeGuest.disabled = true;
  oneGuest.selected = true;
};

const roomValue = () => {
  if (roomNumber.value === '1') {
    zeroGuest.disabled = true;
    oneGuest.disabled = false;
    twoGuest.disabled = true;
    threeGuest.disabled = true;
    oneGuest.selected = true;
  }
  if (roomNumber.value === '2') {
    threeGuest.disabled = true;
    zeroGuest.disabled = true;
    oneGuest.disabled = false;
    twoGuest.disabled = false;
    twoGuest.selected = true;
  }
  if (roomNumber.value === '3') {
    zeroGuest.disabled = true;
    oneGuest.disabled = false;
    twoGuest.disabled = false;
    threeGuest.disabled = false;
    threeGuest.selected = true;
  }
  if (roomNumber.value === '0') {
    oneGuest.disabled = true;
    twoGuest.disabled = true;
    threeGuest.disabled = true;
    zeroGuest.disabled = false;
    zeroGuest.selected = true;
  }
};

const houseValue = () => {
  if (houseType.value === 'bungalow') {
    priceinput.min = '0';
  }
  if (houseType.value === 'flat') {
    priceinput.min = '1000';
  }
  if (houseType.value === 'hotel') {
    priceinput.min = '3000';
  }
  if (houseType.value === 'house') {
    priceinput.min = '5000';
  }
  if (houseType.value === 'palace') {
    priceinput.min = '10000';
  }
};

const onTimeinValue = () => {
  if (timein.value === '12:00') {
    timeout.value = '12:00';
  }

  if (timein.value === '13:00') {
    timeout.value = '13:00';
  }

  if (timein.value === '14:00') {
    timeout.value = '14:00';
  }
};

const onTimeoutValue = () => {
  if (timeout.value === '12:00') {
    timein.value = '12:00';
  }

  if (timeout.value === '13:00') {
    timein.value = '13:00';
  }

  if (timeout.value === '14:00') {
    timein.value = '14:00';
  }
};

const catchChange = () => {
  roomNumber.addEventListener('change', roomValue);
  houseType.addEventListener('change', houseValue);
  timein.addEventListener('change', onTimeinValue);
  timeout.addEventListener('change', onTimeoutValue);
  roomValue();
  prisitineValidate();
};

export { catchChange, offSeatNumber };

