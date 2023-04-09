import { getActivityLog, setActivityLog } from './ls.js';
import { renderActivityLog } from './renderActivityLog.js';

export const updateLog = (result, units, startDate, endDate) => {
  const logEntry = {
    result,
    units,
    startDate,
    endDate,
  };
  setActivityLog(logEntry);
  renderActivityLog(getActivityLog());
};
