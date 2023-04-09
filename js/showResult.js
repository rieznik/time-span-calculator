const resultsContainer = document.getElementById('result');

export const showResult = (result, units) => {
  resultsContainer.innerHTML = `<span class="text-4xl md:text-6xl font-bold">${result}</span> ${units}`;
};
