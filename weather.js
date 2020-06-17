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
getWeather("Canberra", "Aus").then(function (weather) {
  const w = weather;
  const location = weather.name;
  const desc = weather.weather[0].description;
  const icon = weather.weather[0].icon;
  const wString = `Today's Temp ${weather.main.temp} `;
  const humidnity = ` Humidnity:${weather.main.humidity}%`;
  const feelLike = ` Feel Like:${weather.main.feels_like} `;
  const wind = `Wind Speed:${weather.wind.speed}, Wind Deg:${weather.wind.deg}`;
  console.log(icon);
  console.log(w);
  document.getElementById("w-location").innerHTML = location;
  document.getElementById("w-desc").innerHTML = desc;
  document.getElementById("w-icon").innerHTML = icon;
  document.getElementById("w-string").innerHTML = wString;
  document.getElementById("w-humidnity").innerHTML = humidnity;
  document.getElementById("w-feels-like").innerHTML = feelLike;
  document.getElementById("w-wind").innerHTML = wind;
});
