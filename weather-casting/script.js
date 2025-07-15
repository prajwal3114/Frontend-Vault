const input = document.getElementById("input");
const button = document.querySelector("#search");

button.addEventListener("click", async function () {
    const city = input.value.trim();
    if (city === "") {
        alert("Invalid input");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${WEATHER_API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found");
            return;
        }

        displayWeather(data); 
    } catch (error) {
        alert("Error fetching weather data. Please try again.");
        console.error(error);
    }
});

function displayWeather(data) {
    const resultDiv = document.querySelector(".here");
    resultDiv.innerHTML = `
        <h2 class="text-xl font-bold">${data.name}</h2>
        <p>🌡 Temperature: ${data.main.temp}°C</p>
        <p>☁ Condition: ${data.weather[0].description}</p>
        <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
}
