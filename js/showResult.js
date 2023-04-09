const resultsContainer = document.getElementById('result');

export const showResult = (result, units) => {
  if (resultsContainer.parentElement.classList.contains('bg-calculator'))
    resultsContainer.parentElement.classList.remove('bg-calculator');
  resultsContainer.innerHTML = `<span class="text-4xl md:text-6xl font-bold">${result}</span> ${units}`;
};
