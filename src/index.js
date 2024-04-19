let searchBar = document.querySelector("#search-form");
console.log(searchBar);
searchBar.addEventListener("submit", showCity);
function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");
  console.log(cityInput.value);
  let h2 = document.querySelector("#meteo-city");
  h2.innerHTML = `${cityInput.value}`;
}
