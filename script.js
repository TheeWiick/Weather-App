const apiKey = "2ae4dcc4327a3ae57c7f55a3b087b64a";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Ciudad no encontrada");
        const data = await response.json();
        showWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function showWeather(data) {
    const weatherInfo = document.getElementById("weatherInfo");
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const icon = document.getElementById("icon");

    cityName.textContent = data.name;
    temperature.textContent = `Temperatura: ${Math.round(data.main.temp)}°C`;
    description.textContent = data.weather[0].description;
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherInfo.classList.remove("hidden");
}
