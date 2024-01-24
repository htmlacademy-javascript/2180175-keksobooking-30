const successForm = document.querySelector('#success');
const serverErrorForm = document.querySelector('#server-error');
const errorForm = document.querySelector('#error');
const body = document.querySelector('body');
const resetButton = document.querySelector('.ad-form__reset');

const renderSuccess = () => {
  const successPopup = successForm.content;
  const successPopupElement = successPopup.cloneNode(true);
  body.append(successPopupElement);
  const successBox = document.querySelector('.success');

  const closeSuccess = () => {
    successBox.remove();
  };

  const OnSuccessPopupKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeSuccess();
      resetButton.click();
      document.removeEventListener('keydown', OnSuccessPopupKeydown);
    }
  };

  const onSuccessDocumentCLick = () => {
    closeSuccess();
    resetButton.click();
    successBox.removeEventListener('click', onSuccessDocumentCLick);
  };

  document.addEventListener('keydown', OnSuccessPopupKeydown);
  successBox.addEventListener('click', onSuccessDocumentCLick);
};

const renderError = () => {
  const errorPopup = errorForm.content;
  const errorPopupElement = errorPopup.cloneNode(true);
  body.append(errorPopupElement);
  const errorBox = document.querySelector('.error');
  const errorButton = document.querySelector('.error__button');

  const errorButtonClick = () => {
    errorBox.remove();
  };

  const OnErrorButtonClick = () => {
    errorButtonClick();
    errorButton.removeEventListener('click', OnErrorButtonClick);
  };

  const OnErrorPopupKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      errorButtonClick();
      document.removeEventListener('keydown', OnErrorPopupKeydown);
    }
  };

  const onErrorDocumentCLick = () => {
    errorButtonClick();
    errorBox.removeEventListener('click', onErrorDocumentCLick);
  };

  errorButton.addEventListener('click', OnErrorButtonClick);
  document.addEventListener('keydown', OnErrorPopupKeydown);
  errorBox.addEventListener('click', onErrorDocumentCLick);
};

const renderServerError = () => {
  const serverErrorPopup = serverErrorForm.content;
  const serverErrorPopupElement = serverErrorPopup.cloneNode(true);
  body.append(serverErrorPopupElement);
};
export { renderSuccess, renderError, renderServerError };

