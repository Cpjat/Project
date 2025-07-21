const apiKey = '20bd87dd32bf56d3a41c44372cb95ab9'; 

async function getWeather() {
  const cityInput = document.getElementById('city-input').value;
  const weatherInfo = document.getElementById('weather-info');
  const errorMessage = document.getElementById('error-message');

  if (!cityInput) {
    errorMessage.textContent = 'Please enter a city name.';
    weatherInfo.innerHTML = '';
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherInfo.innerHTML = `
      <h2>${data.name}</h2>
      <img src="${iconUrl}" alt="Weather Icon" />
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;

    errorMessage.textContent = '';
  } catch (error) {
    errorMessage.textContent = error.message;
    weatherInfo.innerHTML = '';
  }
}
