const form = document.querySelector('.ad-form');
const formElement = form.querySelectorAll('fieldset, .ad-form__slider');
const formFilters = document.querySelector('.map__filters');
const formFiltersElement = formFilters.querySelectorAll('select, fieldset');

const addDisabled = (elements) => {
  elements.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};

const removeDisabled = (elements) => {
  elements.forEach((element) => {
    element.removeAttribute('disabled', 'disabled');
  });
};

const toggleFormActive = (elements) => {
  elements.forEach((element) => {
    element.classList.toggle('ad-form--disabled');
  });
};

const inActiveState = () => {
  toggleFormActive([form, formFilters]);
  addDisabled(formElement);
  addDisabled(formFiltersElement);
};

const activeState = () => {
  toggleFormActive([form, formFilters]);
  removeDisabled(formElement);
  removeDisabled(formFiltersElement);
};

export {inActiveState, activeState};
