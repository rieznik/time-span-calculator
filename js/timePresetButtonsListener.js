const timespanPresetsElement = document.getElementById('timespan-presets');

export const timePresetButtonsListener = (cb) => {
  timespanPresetsElement.addEventListener('click', (event) => {
    console.log(Boolean(event.target.dataset.timespan), event.target.dataset);
    cb();
  });
};
