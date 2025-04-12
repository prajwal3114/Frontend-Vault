const input = document.getElementById("input");
const button = document.querySelector("#search");

button.addEventListener("click", async function () {
    const city = input.value.trim();
    if (city === "") {
        alert("Invalid input");
        return;
    }
    const apiKey = "8349fc1e7bed7c02d02e243938dfb56a"; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found");
            return;
        }

        displayWeather(data); 

    } catch (error) {
        alert("Error fetching data");
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
