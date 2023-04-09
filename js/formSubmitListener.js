const formElement = document.getElementById('calc-form');
const startDateElem = document.getElementById('start-date');
const endDateElem = document.getElementById('end-date');
const daysSelection = document.getElementById('filter-days-selection');
const unitsElements = document.querySelectorAll('#units [type="radio"]');

const getUnits = (elsSet) => {
  const checked = Array.from(elsSet).filter((radio) => radio.checked);
  return checked[0].getAttribute('id');
};

export const formSubmitListener = (cb) => {
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputData = {
      startDate: new Date(startDateElem.value),
      endDate: new Date(endDateElem.value),
      daysSelection: daysSelection.value,
      units: getUnits(unitsElements),
    };
    cb(inputData);
  });
};
