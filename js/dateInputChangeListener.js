const startDateElem = document.getElementById('start-date');
const endDateElem = document.getElementById('end-date');

export const dateInputChangeListener = (cb) => {
  startDateElem.addEventListener('change', (event) => {
    cb(event.target.id, event.target.value);
  });
  endDateElem.addEventListener('change', (event) => {
    cb(event.target.id, event.target.value);
  });
};
