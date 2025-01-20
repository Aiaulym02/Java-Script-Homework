const apiKey = "fb2cff02b71168e9f0c68fd3f83d168a";

async function getWeather() {
  const city = document.getElementById("city").value;
  const resultDiv = document.getElementById("result");

  if (!city) {
    resultDiv.textContent = "Қала атауын енгізіңіз.";
    return;
  }

  const apiUrl =
    "api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kk";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Қате пайда болды");
    }

    const data = await response.json();

    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    resultDiv.innerHTML = `
                    <h2>${cityName}</h2>
                    <p>Температура: ${temperature}&deg;C</p>
                    <p>Ауа райы: ${weatherDescription}</p>
                `;
  } catch (error) {
    resultDiv.textContent = "Ауа райы деректерін жүктеу мүмкін болмады.";
  }
}
