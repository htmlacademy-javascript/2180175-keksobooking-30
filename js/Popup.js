const successForm = document.querySelector('#success');
const serverErrorForm = document.querySelector('#server-error');
const errorForm = document.querySelector('#error');
const body = document.querySelector('body');

const renderSuccess = () => {
  const successPopup = successForm.content;
  const successPopupElement = successPopup.cloneNode(true);
  body.append(successPopupElement);

  const hidePopup = () => {
    successPopupElement.remove();
  };

  const onClosePopupClick = () => {
    hidePopup();
    document.removeEventListener('click', onClosePopupClick);
  };

  document.addEventListener('click', onClosePopupClick);
};

const errorButtonClick = () => {
  document.querySelector('.error').remove();
};

const OnErrorButtonClick = () => {
  errorButtonClick();
  document.removeEventListener('click', OnErrorButtonClick);
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
  document.removeEventListener('click', onErrorDocumentCLick);
};

const renderError = () => {
  const errorPopup = errorForm.content;
  const errorPopupElement = errorPopup.cloneNode(true);
  body.append(errorPopupElement);
  const errorButton = document.querySelector('.error__button');
  document.addEventListener('keydown', OnErrorPopupKeydown);
  document.addEventListener('click', onErrorDocumentCLick);
  errorButton.addEventListener('click', OnErrorButtonClick);
};

const renderServerError = () => {
  const serverErrorPopup = serverErrorForm.content;
  const serverErrorPopupElement = serverErrorPopup.cloneNode(true);
  body.append(serverErrorPopupElement);
};
export { renderSuccess, renderError, renderServerError };

