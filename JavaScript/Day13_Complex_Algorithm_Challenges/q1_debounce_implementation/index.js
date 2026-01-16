function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function apiCall(query) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = "API called with: " + query;
}

const debouncedApi = debounce(apiCall, 500);

const input = document.getElementById("search");

input.addEventListener("input", (e) => {
  debouncedApi(e.target.value);
});