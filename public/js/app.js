const weatherForm = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const weatherInfo = document.getElementById("weather-info");

// Add an event listener to the form to fetch and display weather data
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = cityInput.value;
  getWeather(cityName);
});

function getWeather(cityName) {
  const apiKey = "1f4d730bdec53a34a72f0833fd0ab451";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const weatherHtml = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
      weatherInfo.innerHTML = weatherHtml;
    })
    .catch((error) => {
      console.log("Error fetching weather data:", error);
      weatherInfo.innerHTML = "Could not fetch weather data.";
    });
}
