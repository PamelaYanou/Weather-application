function searchLogin() {
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#meteo-city");
  cityElement.innerHTML = searchInput.value;
}

let searchForms = document.querySelector("#search-form");
searchForms.addEventListener("submit", searchLogin);
