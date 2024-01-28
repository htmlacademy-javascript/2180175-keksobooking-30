const sliderElement = document.querySelector('.ad-form__slider');
const price = document.querySelector('#price');


const slider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: 1000,
      max: 100000,
    },
    start: 5000,
    step: 100,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(0);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  sliderElement.noUiSlider.on('update', () => {
    price.value = sliderElement.noUiSlider.get();
  });

  price.addEventListener('change', function () {
    sliderElement.noUiSlider.set([this.value]);
  });
};

export { slider };
