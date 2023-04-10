const startDateElem = document.getElementById('start-date');
const endDateElem = document.getElementById('end-date');

const formatDate = (date) => date.toISOString().split('T')[0];

const addWeek = (startDate) =>
  formatDate(new Date(startDate.setDate(startDate.getDate() + 7)));

const addMonth = (startDate) =>
  formatDate(new Date(startDate.setMonth(startDate.getMonth() + 1)));

export const updateStartDateMax = (maxValue) => {
  startDateElem.setAttribute('max', maxValue);
};

export const updateEndDateMin = (minValue) => {
  endDateElem.setAttribute('min', minValue);
};

export const updateEndDateInput = (timespan) => {
  const startDate = new Date(startDateElem.value);

  const endDateSetters = {
    week: () => {
      endDateElem.value = addWeek(startDate);
    },
    month: () => {
      endDateElem.value = addMonth(startDate);
    },
  };

  endDateSetters[timespan]();
  updateStartDateMax(endDateElem.value);
};
