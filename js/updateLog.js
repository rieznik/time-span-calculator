const LS_LOG_KEY = 'activityLog';

const setActivityLog = (logEntry) => {
  const activityLog = JSON.parse(localStorage.getItem(LS_LOG_KEY)) || [];

  activityLog.push(logEntry);
  if (activityLog.length > 10) activityLog.shift();

  localStorage.setItem(LS_LOG_KEY, JSON.stringify(activityLog));
};

export const updateLog = (result, units, startDate, endDate) => {
  const logEntry = {
    result,
    units,
    startDate,
    endDate,
  };
  setActivityLog(logEntry);
  // getActivityLog();
  // renderActivityLog();
};
