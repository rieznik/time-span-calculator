const startDateElem = document.getElementById('start-date');
const endDateElem = document.getElementById('end-date');
const timespanPresetsElement = document.getElementById('timespan-presets');

export const dateInputChangeListener = (cb) => {
  startDateElem.addEventListener('change', (event) => {
    if (endDateElem.hasAttribute('disabled')) {
      endDateElem.removeAttribute('disabled');
      const timespanButtonElements = Array.from(
        timespanPresetsElement.children
      );
      timespanButtonElements.forEach((el) => el.removeAttribute('disabled'));
    }
    cb(event.target.id, event.target.value);
  });
  endDateElem.addEventListener('change', (event) => {
    cb(event.target.id, event.target.value);
  });
};
