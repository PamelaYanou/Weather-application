function updateWeatherInfo(response) {
  let temperatureElement = document.querySelector("#meteo-app-figure");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let h2 = document.querySelector("h2");
  h2.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
}
function callCity(city) {
  let apiKey = `6d0cfo306t4a80c23b5feedc0cb2260c`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherInfo);
}
function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");
  callCity(cityInput.value);
}
let searchBar = document.querySelector("#search-form");
console.log(searchBar);
searchBar.addEventListener("submit", showCity);
