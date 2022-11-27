let now = new Date();
let p = document.querySelector("p.current");
let week = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
let day = week[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
p.innerHTML = `${day}, ${month} ${date} ${hours}:${minutes}`;

//

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchCity");
  let h1 = document.querySelector("#city");
  h1.innerHTML = searchInput.value;

  searchCity(searchInput.value);
}

let form = document.querySelector("#search-city");
form.addEventListener("submit", search);

//

function convertToFahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp-value");
  temp.innerHTML = "59°";
}

function convertToCelsius(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp-value");
  temp.innerHTML = "15°";
}

let fahrenLink = document.querySelector("#fahrenheit");
fahrenLink.addEventListener("click", convertToFahrenheit);

let CelLink = document.querySelector("#celsius");
CelLink.addEventListener("click", convertToCelsius);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let showTemp = document.querySelector("#temp-value");
  showTemp.innerHTML = temperature;
  let cityname = response.data.name;
  let showCityName = document.querySelector("#city");
  showCityName.innerHTML = cityname;
}

function searchCity(city) {
  let apiKey = "9d9254fabd8a44bac14ad45441ef74d5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "9d9254fabd8a44bac14ad45441ef74d5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function currentLocation() {
  navigator.geolocation.getCurrentPosition(showLocation);
}
