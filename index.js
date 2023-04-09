import { formSubmitListener } from './js/formSubmitListener.js';
import { showResult } from './js/showResult.js';

formSubmitListener((inputData) => {
  const result = inputData; // calculateTime(inputData);
  showResult(result);
  // updateLog();
});
