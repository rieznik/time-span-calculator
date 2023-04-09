import { formSubmitListener } from './js/formSubmitListener.js';
import { showResult } from './js/showResult.js';
import { calculateDuration } from './js/calculateDuration.js';

formSubmitListener((inputData) => {
  const result = calculateDuration(inputData);
  showResult(result, inputData.units);
  // updateLog();
});
