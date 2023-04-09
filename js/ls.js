const LS_LOG_KEY = 'activityLog';

export const getActivityLog = () =>
  JSON.parse(localStorage.getItem(LS_LOG_KEY));

export const setActivityLog = (logEntry) => {
  const activityLog = getActivityLog() || [];

  activityLog.push(logEntry);
  if (activityLog.length > 10) activityLog.shift();

  localStorage.setItem(LS_LOG_KEY, JSON.stringify(activityLog));
};
