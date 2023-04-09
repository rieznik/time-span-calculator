const formElement = document.querySelector('form');

export const formSubmitListener = (cb) => {
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputData = {
      startDate: new Date(),
      daysSelection: 'all',
    };
    cb(inputData);
  });
};
