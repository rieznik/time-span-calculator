const logEntriesContainerElement = document.getElementById(
  'log-entries-container'
);
const dashLineElement = document.createElement('div');
dashLineElement.setAttribute(
  'class',
  'absolute h-full border border-dashed border-opacity-20 border-secondary'
);

export const renderActivityLog = (log) => {
  logEntriesContainerElement.innerHTML = '';

  if (!log) {
    logEntriesContainerElement.classList.add('bg-no-data', 'min-h-[250px]');
    return;
  }
  if (logEntriesContainerElement.classList.contains('bg-no-data'))
    logEntriesContainerElement.classList.remove('bg-no-data', 'min-h-[250px]');

  log.forEach((item) => {
    const startDate = new Date(item.startDate);
    const endDate = new Date(item.endDate);
    const logEntryWrapper = document.createElement('div');
    logEntryWrapper.setAttribute(
      'class',
      'flex items-center w-full my-6 -ml-1.5'
    );
    logEntryWrapper.innerHTML = `
      <div class="w-1/12 z-10">
        <div class="w-3.5 h-3.5 bg-purple-400 rounded-full"></div>
      </div>
      <div class="w-11/12 xl:pl-2">
        <p class="text-sm text-gray-600 font-semibold">
          ${item.result} ${item.units}
        </p>
        <p class="py-1 text-xs text-gray-700">
          ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}
        </p>
        <p class="text-xs text-gray-700">
          Selected days: <span class="uppercase">${item.daysSelection}</span>
        </p>
      </div>`;
    logEntriesContainerElement.prepend(logEntryWrapper);
  });
  logEntriesContainerElement.prepend(dashLineElement);
};
