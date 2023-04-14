import { formSubmitListener } from './formSubmitListener.js';
import { showResult } from './showResult.js';
import { calculateDuration } from './calculateDuration.js';
import { getActivityLog, setActivityLog } from './ls.js';
import { renderActivityLog } from './renderActivityLog.js';
import { timePresetButtonsListener } from './timePresetButtonsListener.js';
import { dateInputChangeListener } from './dateInputChangeListener.js';
import {
  updateEndDateInput,
  updateStartDateMax,
  updateEndDateMin,
} from './updateDateInput.js';

const startApp = () => {
  renderActivityLog(getActivityLog());

  dateInputChangeListener((id, value) => {
    if (id === 'start-date') updateEndDateMin(value);
    if (id === 'end-date') updateStartDateMax(value);
  });

  timePresetButtonsListener((timespan) => {
    updateEndDateInput(timespan);
  });

  formSubmitListener((inputData) => {
    const result = calculateDuration(inputData);

    showResult(result, inputData.units);

    const logEntry = {
      result,
      units: inputData.units,
      startDate: inputData.startDate,
      endDate: inputData.endDate,
      daysSelection: inputData.daysSelection,
    };
    setActivityLog(logEntry);
    renderActivityLog(getActivityLog());
  });
};

document.addEventListener('DOMContentLoaded', startApp);
