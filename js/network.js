import { onActiveFilter } from './form';
import { renderServerError } from './popup';

const getData = await fetch(
  'https://30.javascript.htmlacademy.pro/keksobooking/data',
  {
    method: 'GET',
  })
  .then((response) => {
    if (response.ok) {
      onActiveFilter();
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  })
  .catch(() => {
    renderServerError();
  });
export { getData };
