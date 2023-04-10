const getDaysNumber = (startDate, endDate, daysSelection) => {
  let start = startDate;
  const end = endDate;

  const dayMilliseconds = 1000 * 60 * 60 * 24;
  const dayCategorySubsets = {
    Weekends: [0, 6],
    Weekdays: [1, 2, 3, 4, 5],
  };

  if (dayCategorySubsets[daysSelection]) {
    let days = 0;
    while (start <= end) {
      const day = start.getDay();
      if (dayCategorySubsets[daysSelection].includes(day)) days++;
      start = new Date(+start + dayMilliseconds);
    }
    return days;
  }

  return (endDate - startDate) / dayMilliseconds;
};

export const calculateDuration = (inputData) => {
  const unitMultipliers = {
    seconds: 86400,
    minutes: 1440,
    hours: 24,
    days: 1,
  };

  return (
    getDaysNumber(
      inputData.startDate,
      inputData.endDate,
      inputData.daysSelection
    ) * unitMultipliers[inputData.units]
  ).toFixed();
};
