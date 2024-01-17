import { isEscapeKey } from "./escape";

const successForm = document.querySelector('#success');
const serverErrorForm = document.querySelector('#server-error');
const errorForm = document.querySelector('#error');
const errorButton = document.querySelector('.error__button');
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

const renderError = () => {
  const errorPopup = errorForm.content;
  const errorPopupElement = errorPopup.cloneNode(true);
  body.append(errorPopupElement);
  errorButton.addEventListener('click', () => {
    errorPopupElement.remove();
  });
};

const renderServerError = () => {
  const serverErrorPopup = serverErrorForm.content;
  const serverErrorPopupElement = serverErrorPopup.cloneNode(true);
  body.append(serverErrorPopupElement);
};
export { renderSuccess, renderError, renderServerError };

