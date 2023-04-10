const timespanPresetsElement = document.getElementById('timespan-presets');

export const timePresetButtonsListener = (cb) => {
  timespanPresetsElement.addEventListener('click', (event) => {
    if (event.target.dataset.timespan) cb(event.target.dataset.timespan);
  });
};
