async function getWeather(city, country) {
  // await response of the fetch call
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=b739255c0b0dacd8806fb31e5da42c99`
  );
  // only proceed once its resolve
  const data = await response.json();
  // only proceed once second promise resolve
  return data;
}

function loadWeather(weather) {
  const location = weather.name;
  const desc = weather.weather[0].description;
  const icon = weather.weather[0].icon;
  const wString = `Today's Temp ${Math.round(weather.main.temp - 273.13)} C`;
  const humidnity = ` Humidnity:${weather.main.humidity}%`;
  const feelLike = ` Feel Like:${Math.round(
    weather.main.feels_like - 273.13
  )} C`;
  const wind = `Wind Speed:${weather.wind.speed}, Wind Deg:${weather.wind.deg}`;

  document.getElementById("w-location").innerHTML = location;
  document.getElementById("w-desc").innerHTML = desc;
  document.getElementById("w-icon").innerHTML = icon;
  document.getElementById("w-string").innerHTML = wString;
  document.getElementById("w-humidnity").innerHTML = humidnity;
  document.getElementById("w-feels-like").innerHTML = feelLike;
  document.getElementById("w-wind").innerHTML = wind;
}
getWeather("Canberra", "Aus").then(loadWeather);

document.getElementById("w-change-btn").addEventListener("click", changeCity);

function changeCity(city, country) {
  const cityValue = document.getElementById("city").value;
  const countryValue = document.getElementById("country").value;
  console.log(cityValue);
  console.log(countryValue);
  getWeather(`${cityValue}`, `${countryValue}`).then(loadWeather);

  // close modal

  $("#locModal").modal("hide");
}
