formListener((inputData) => {
  const result = calculateTime(inputData);
  showResult();
  updateLog();
});
