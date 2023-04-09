import { formSubmitListener } from './js/formSubmitListener.js';
import { showResult } from './js/showResult.js';
import { calculateDuration } from './js/calculateDuration.js';
import { updateLog } from './js/updateLog.js';

formSubmitListener((inputData) => {
  const result = calculateDuration(inputData);
  showResult(result, inputData.units);
  updateLog(result, inputData.units, inputData.startDate, inputData.endDate);
});
