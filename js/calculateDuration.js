export const calculateDuration = (inputData) => {
  const conversionDividers = {
    seconds: 1000,
    minutes: 60000,
    hours: 3600000,
    days: 86400000,
  };

  return (
    Math.abs(inputData.startDate - inputData.endDate) /
    conversionDividers[inputData.units]
  ).toFixed();
};
