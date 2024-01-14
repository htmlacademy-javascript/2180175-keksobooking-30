const createLoader = (onSuccess, onError) => () => fetch(
  'https://30.javascript.pages.academy/keksobooking/data',
  {
    method: 'GET',
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((data) => {
    onSuccess(data);
  })
  .catch((err) => {
    onError(err);
  });

export { createLoader };
