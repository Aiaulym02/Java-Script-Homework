const city = "Almaty";
const apiKey = "fb2cff02b71168e9f0c68fd3f83d168a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kk;";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ауа райы мәліметтерін алу мүмкін болмады");
    }
    return response.json();
  })
  .then((data) => {
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    document.body.innerHTML = `<h2>Қала:${data.name}</h2>
    <p>Температура:${temperature}С</p>
    <p>Ауа райы:${weatherDescription}</p>`;
  })
  .catch((error) => {
    console.error("Қате:", error);
    document.body.innerHTML = (
      <p>Ауа райы мәліметтерін жүктеу мүмкін болмады</p>
    );
  });
