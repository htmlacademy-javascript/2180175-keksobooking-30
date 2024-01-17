import { onActiveFilter, onActiveInactiveState } from './form';
import { renderServerError } from './Popup';

const getData = await fetch(
  'https://30.javascript.pages.academy/keksobooking/data',
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
