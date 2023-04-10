import { formSubmitListener } from './formSubmitListener.js';
import { showResult } from './showResult.js';
import { calculateDuration } from './calculateDuration.js';
import { getActivityLog, setActivityLog } from './ls.js';
import { renderActivityLog } from './renderActivityLog.js';
import { timePresetButtonsListener } from './timePresetButtonsListener.js';
import { setEndDateInput, setStartDateInput } from './setDateInput.js';

const startApp = () => {
  renderActivityLog(getActivityLog());
  setStartDateInput(new Date());

  timePresetButtonsListener((timespan) => {
    setEndDateInput(timespan);
  });

  formSubmitListener((inputData) => {
    const result = calculateDuration(inputData);
    showResult(result, inputData.units);

    const logEntry = {
      result,
      units: inputData.units,
      startDate: inputData.startDate,
      endDate: inputData.endDate,
    };
    setActivityLog(logEntry);
    renderActivityLog(getActivityLog());
  });
};

document.addEventListener('DOMContentLoaded', startApp);
