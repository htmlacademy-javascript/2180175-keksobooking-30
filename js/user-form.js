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
  const pristine = new Pristine(form);
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const valid = pristine.validate();
    if (valid) {
      form.submit();
    } else {
      alert('Форма заполена неверно')
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

const roomNumberValue = () => {
  roomNumber.addEventListener('change', (evt) => {
    const newValue = evt.target.value;
    console.log('newValue - ', newValue);
    const guestCountOptions = Array.from(guestCount.querySelectorAll('option'));
    guestCountOptions.forEach(el => {
      console.log(el)
      if (newValue !== el.value) {
        el.disabled = true;
      } else {
        el.disabled = false;
      }
      if (newValue === '2') {
      }
    });
    guestCount.value = newValue;
  });
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

const timeinValue = () => {
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

const timeoutValue = () => {
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
  houseType.addEventListener('change', houseValue);
  timein.addEventListener('change', timeinValue);
  timeout.addEventListener('change', timeoutValue);
  roomNumberValue();
  prisitineValidate();
};

export { catchChange, offSeatNumber };

