function updateWeatherInfo(response) {
  let temperatureElement = document.querySelector("#meteo-app-figure");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let h2 = document.querySelector("h2");
  h2.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  let imageElement = document.querySelector("#image");
  imageElement.innerHTML = `<img
                  src="${response.data.condition.icon_url}"
                  class="image"
                />`;
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
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
callCity("Berlin");
let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
