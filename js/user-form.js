const form = document.querySelector('.ad-form');
const roomNumber = document.querySelector('#room_number');
const guestCount = document.querySelector('#capacity');
const houseType = document.querySelector('#type');
const priceinput = document.querySelector('#price');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

const addActivityItem = () => {
  console.log()
};

const roomValue = () => {
  const zeroGuest = guestCount[3];
  const oneGuest = guestCount[2];
  const twoGuest = guestCount[1];
  const threeGuest = guestCount[0];

  if (roomNumber.value === '1') {
    zeroGuest.remove();
    twoGuest.remove();
    threeGuest.remove();
  }

  if (roomNumber.value === '2') {
    threeGuest.remove();
    zeroGuest.remove();
  }

  if (roomNumber.value === '3') {
    zeroGuest.remove();
  }

  if (roomNumber.value === '100') {
    oneGuest.remove();
    twoGuest.remove();
    threeGuest.remove();
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
  roomNumber.addEventListener('change', roomValue);
  houseType.addEventListener('change', houseValue);
  timein.addEventListener('change', timeinValue);
  timeout.addEventListener('change', timeoutValue);
};

export { catchChange, addActivityItem };

