const startDateElem = document.getElementById('start-date');
const endDateElem = document.getElementById('end-date');

export const setEndDate = (timespan) => {
  const startDate = new Date(startDateElem.value);

  if (timespan === 'week') {
    const endDate = new Date(startDate.setDate(startDate.getDate() + 7));
    const formattedValue = endDate.toISOString().split('T');
    endDateElem.value = formattedValue[0];
  }

  if (timespan === 'month') {
    const endDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
    const formattedValue = endDate.toISOString().split('T');
    endDateElem.value = formattedValue[0];
  }
};
