// DATE FUNCTION
let dateElement = document.querySelector("#date");
let currentDay = new Date();
let date = currentDay.getDate();
let month = currentDay.getMonth();
let monthIndex = currentDay.getMonth();
let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

let dayIndex = currentDay.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let year = currentDay.getFullYear();

dateElement.innerHTML = `${days[dayIndex]} ${date} ${months[monthIndex]} ${year}`;

let timeElement = document.querySelector("#time");
let hours = currentDay.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentDay.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

timeElement.innerHTML = `${hours}:${minutes}`;

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}`;
}

// LOCATION FUNCTION
function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name.toUpperCase();
  document.querySelector("#city-small").innerHTML = response.data.name;
  let mainTemperature = Math.round(response.data.main.temp);
  document.querySelector("#main-temperature").innerHTML = `${mainTemperature}`;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#real-feel").innerHTML = Math.round(
    response.data.main.feels_like
  );
  document.querySelector("#max-temp").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#min-temp").innerHTML = Math.round(
    response.data.main.temp_min
  );

  celciusTemperature = response.data.main.temp;
  celciusTemperatureReal = response.data.main.feels_like;
  celciusTemperatureMax = response.data.main.temp_max;
  celciusTemperatureMin = response.data.main.temp_min;

  let weatherSituation = response.data.weather[0].main;
  if (weatherSituation === "Clear") {
    document.querySelector("#situation").innerHTML = "SUNNY";
    document
      .querySelector("#main-image")
      .setAttribute("src", "img/img_01_sunny.png");
    document.querySelector("#background").classList.add("containerSunny");
    document
      .querySelector("#background")
      .classList.remove(
        "containerCloudy",
        "containerPartlyCloudy",
        "containerRaining",
        "containerSnow"
      );
  }
  if (weatherSituation === "Clouds") {
    document.querySelector("#situation").innerHTML = "CLOUDY";
    document
      .querySelector("#main-image")
      .setAttribute(
        "src",
        "https://static.vecteezy.com/system/resources/previews/005/362/115/original/smiling-cloud-kawaii-character-blue-object-of-sky-symbol-of-cloudy-weather-mascot-of-weather-forecast-cute-cartoon-illustration-vector.jpg"
      );
    document.querySelector("#background").classList.add("containerCloudy");
    document
      .querySelector("#background")
      .classList.remove(
        "containerSunny",
        "containerPartlyCloudy",
        "containerRaining",
        "containerSnow"
      );
  }
  if (weatherSituation === "Mist") {
    document.querySelector("#situation").innerHTML = "MISTY";
    document
      .querySelector("#main-image")
      .setAttribute("src", "img/img_02_cloudy.png");
    document.querySelector("#background").classList.add("containerCloudy");
    document
      .querySelector("#background")
      .classList.remove(
        "containerSunny",
        "containerPartlyCloudy",
        "containerRaining",
        "containerSnow"
      );
  }
  if (weatherSituation === "Smoke") {
    document.querySelector("#situation").innerHTML = "SMOKEY";
    document
      .querySelector("#main-image")
      .setAttribute(
        "src",
        "https://www.google.com/search?q=cloudy+weather+transparent+background&tbm=isch&ved=2ahUKEwirqJLw84v9AhW6hv0HHZYtCcsQ2-cCegQIABAA&oq=cloudy+weather+transparent+background&gs_lcp=CgNpbWcQAzIGCAAQBxAeOgQIIxAnUJ8CWPYyYN01aABwAHgAgAGIAYgB-w6SAQQwLjE3mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=D7jmY-vkBrqN9u8Pltuk2Aw&bih=629&biw=1039&client=safari#imgrc=U2YhhrJRXOOdUM"
      );
    document.querySelector("#background").classList.add("containerCloudy");
    document
      .querySelector("#background")
      .classList.remove(
        "containerSunny",
        "containerPartlyCloudy",
        "containerRaining",
        "containerSnow"
      );
  }
  if (weatherSituation === "Haze") {
    document.querySelector("#situation").innerHTML = "HAZY";
    document
      .querySelector("#main-image")
      .setAttribute("src", "img/img_02_cloudy.png");
    document.querySelector("#background").classList.add("containerCloudy");
    document
      .querySelector("#background")
      .classList.remove(
        "containerSunny",
        "containerPartlyCloudy",
        "containerRaining",
        "containerSnow"
      );
  }
  if (weatherSituation === "Dust") {
    document.querySelector("#situation").innerHTML = "DUSTY";
    document
      .querySelector("#main-image")
      .setAttribute("src", "img/img_02_cloudy.png");
    document
      .querySelector("#background")
      .classList.add("containerPartlyCloudy");
    document
      .querySelector("#background")
      .classList.remove(
        "containerSunny",
        "containerCloudy",
        "containerRaining",
        "containerSnow"
      );
  }
  if (weatherSituation === "Fog") {
    document.querySelector("#situation").innerHTML = "FOGGY";
    document
      .querySelector("#main-image")
      .setAttribute("src", "img/img_02_cloudy.png");
    document.querySelector("#background").classList.add("containerCloudy");
    document
      .querySelector("#background")
      .classList.remove(
        "containerSunny",
        "containerPartlyCloudy",
        "containerRaining",
        "containerSnow"
      );
  }
  if (weatherSituation === "Sand") {
    document.querySelector("#situation").innerHTML = "DUSTY";
    document
      .querySelector("#main-image")
      .setAttribute("src", "img/img_02_cloudy.png");
    document.querySelector("#background").classList.add("containerCloudy");
    document
      .querySelector("#background")
      .classList.remove(
        "containerSunny",
        "containerPartlyCloudy",
        "containerRaining",
        "containerSnow"
      );
  }
  if (weatherSituation === "Dust") {
    document.querySelector("#situation").innerHTML = "DUSTY";
    document
      .querySelector("#main-image")
      .setAttribute("src", "img/img_02_cloudy.png");
    document.querySelector("#background").classList.add("containerSnow");
    document
      .querySelector("#background")
      .classList.remove(
        "containerSunny",
        "containerCloudy",
        "containerPartlyCloudy",
        "containerRaining"
      );
  }
  if (weatherSituation === "Ash") {
    document.querySelector("#situation").innerHTML = "ASHY";
    document
      .querySelector("#main-image")
      .setAttribute("src", "img/img_02_cloudy.png");
    document.querySelector("#background").classList.add("containerSnow");
    document
      .querySelector("#background")
      .classList.remove(
        "containerSunny",
        "containerCloudy",
        "containerPartlyCloudy",
        "containerRaining"
      );
  }
  if (weatherSituation === "Squall") {
    document.querySelector("#situation").innerHTML = "WINDY";
    document
      .querySelector("#main-image")
      .setAttribute("src", "img/img_06_windy.png");
    document
      .querySelector("#background")
      .classList.add("containerPartlyCloudy");
    document
      .querySelector("#background")
      .classList.remove(
        "containerSunny",
        "containerCloudy",
        "containerRaining",
        "containerSnow"
      );
  }
  if (weatherSituation === "Tornado") {
    document.querySelector("#situation").innerHTML = "TORNADO";
    document
      .querySelector("#main-image")
      .setAttribute("src", "img/img_06_windy.png");
    document
      .querySelector("#background")
      .classList.add("containerPartlyCloudy");
    document
      .querySelector("#background")
      .classList.remove(
        "containerSunny",
        "containerCloudy",
        "containerRaining",
        "containerSnow"
      );
  }
  if (weatherSituation === "Snow") {
    document.querySelector("#situation").innerHTML = "SNOWY";
    document
      .querySelector("#main-image")
      .setAttribute("src", "img/img_05_snowy.png");
    document.querySelector("#background").classList.add("containerSnow");
    document
      .querySelector("#background")
      .classList.remove(
        "containerSunny",
        "containerCloudy",
        "containerPartlyCloudy",
        "containerRaining"
      );
  }
  if (weatherSituation === "Rain") {
    document.querySelector("#situation").innerHTML = "RAINY";
    document
      .querySelector("#main-image")
      .setAttribute("src", "img/img_04_rainy.png");
    document.querySelector("#background").classList.add("containerRaining");
    document
      .querySelector("#background")
      .classList.remove(
        "containerSunny",
        "containerCloudy",
        "containerPartlyCloudy",
        "containerSnow"
      );
  }
  if (weatherSituation === "Drizzle") {
    document.querySelector("#situation").innerHTML = "DRIZZLY";
    document
      .querySelector("#main-image")
      .setAttribute("src", "img/img_04_rainy.png");
    document.querySelector("#background").classList.add("containerRaining");
    document
      .querySelector("#background")
      .classList.remove(
        "containerSunny",
        "containerCloudy",
        "containerPartlyCloudy",
        "containerSnow"
      );
  }
  if (weatherSituation === "Thunderstorm") {
    document.querySelector("#situation").innerHTML = "THUNDERSTORM";
    document
      .querySelector("#main-image")
      .setAttribute("src", "img/img_04_rainy.png");
    document.querySelector("#background").classList.add("containerRaining");
    document
      .querySelector("#background")
      .classList.remove(
        "containerSunny",
        "containerCloudy",
        "containerPartlyCloudy",
        "containerSnow"
      );
  }
  //document.querySelector("#situation").innerHTML = weatherSituation.toUpperCase();
}
//

function handleSubmit(event) {
  event.preventDefault();
  let units = "metric";
  let cityInput = document.querySelector("#city-input").value;
  // let apiKey = "228eba262b4ca88b9a34ddd2463378be";
  // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  // axios.get(apiUrl).then(displayWeather);
  searchCity(cityInput);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;

  for (let index = 0; index < 6; index++) {
    forecast = response.data.list[index];
    let weatherSituation = forecast.weather[0].main;
    let icon = "";
    if (weatherSituation === "Clear") {
      icon = `<span class="icon-icon_01_sunny"></span>`;
    }
    if (weatherSituation === "Clouds") {
      icon = `<span class="icon-icon_02_cloudy"></span>`;
    }
    if (weatherSituation === "Mist") {
      icon = `<span class="icon-icon_02_cloudy"></span>`;
    }
    if (weatherSituation === "Smoke") {
      icon = `<span class="icon-icon_02_cloudy"></span>`;
    }
    if (weatherSituation === "Haze") {
      icon = `<span class="icon-icon_03_partly cloudy"></span>`;
    }
    if (weatherSituation === "Dust") {
      icon = `<span class="icon-icon_03_partly cloudy"></span>`;
    }
    if (weatherSituation === "Fog") {
      icon = `<span class="icon-icon_02_cloudy"></span>`;
    }
    if (weatherSituation === "Sand") {
      icon = `<span class="icon-icon_03_partly cloudy"></span>`;
    }
    if (weatherSituation === "Dust") {
      icon = `<span class="icon-icon_03_partly cloudy"></span>`;
    }
    if (weatherSituation === "Ash") {
      icon = `<span class="icon-icon_03_partly cloudy"></span>`;
    }
    if (weatherSituation === "Squall") {
      icon = `<span class="icon-icon_06_windy"></span>`;
    }
    if (weatherSituation === "Tornado") {
      icon = `<span class="icon-icon_06_windy"></span>`;
    }
    if (weatherSituation === "Snow") {
      icon = `<span class="icon-icon_05_snowy"></span>`;
    }
    if (weatherSituation === "Rain") {
      icon = `<span class="icon-icon_04_rainy"></span>`;
    }
    if (weatherSituation === "Drizzle") {
      icon = `<span class="icon-icon_04_rainy"></span>`;
    }
    if (weatherSituation === "Thunderstorm") {
      icon = `<span class="icon-icon_04_rainy"></span>`;
    }
    forecastElement.innerHTML += `<div class="col-2"><h7>${formatHours(
      forecast.dt * 1000
    )}</h7></br>${icon}</br><h7>${Math.round(forecast.main.temp)}°</h7></div>`;
  }
}

function searchCity(city) {
  let units = "metric";
  let apiKey = "228eba262b4ca88b9a34ddd2463378be";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayForecast);
}

function displayFahrenheit(event) {
  event.preventDefault();
  mainFahrenheitTemperature = document.querySelector("#main-temperature");
  celciusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celciusTemperature * 9) / 5 + 32;
  let fahrenheitTemperatureReal = (celciusTemperatureReal * 9) / 5 + 32;
  let fahrenheitTemperatureMax = (celciusTemperatureMax * 9) / 5 + 32;
  let fahrenheitTemperatureMin = (celciusTemperatureMin * 9) / 5 + 32;
  mainFahrenheitTemperature.innerHTML = Math.round(fahrenheitTemperature);
  document.querySelector("#real-feel").innerHTML = Math.round(
    fahrenheitTemperatureReal
  );
  document.querySelector("#max-temp").innerHTML = Math.round(
    fahrenheitTemperatureMax
  );
  document.querySelector("#min-temp").innerHTML = Math.round(
    fahrenheitTemperatureMin
  );
}

function displayCelcius(event) {
  event.preventDefault();
  celciusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  mainCelciusTemperature = document.querySelector("#main-temperature");
  mainCelciusTemperature.innerHTML = Math.round(celciusTemperature);
  celciusReal = document.querySelector("#real-feel");
  celciusReal.innerHTML = Math.round(celciusTemperatureReal);
  celciusMax = document.querySelector("#max-temp");
  celciusMax.innerHTML = Math.round(celciusTemperatureMax);
  celciusMin = document.querySelector("#min-temp");
  celciusMin.innerHTML = Math.round(celciusTemperatureMin);
}

let celciusTemperature = null;
let celciusTemperatureReal = null;
let celciusTemperatureMax = null;
let celciusTemperatureMin = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheit);

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", displayCelcius);

searchCity("Istanbul");
