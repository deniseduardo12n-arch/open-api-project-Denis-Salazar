 document.getElementById("loadWeather").addEventListener("click", getWeather);

function getWeather(){

fetch("https://api.open-meteo.com/v1/forecast?latitude=34.03&longitude=-117.04&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto")

.then(response => response.json())

.then(data => {

console.log(data);

document.getElementById("temperature").textContent =
"Temperature: " + data.current_weather.temperature + " °C";

document.getElementById("high").textContent =
"High: " + data.daily.temperature_2m_max[0] + " °C";

document.getElementById("low").textContent =
"Low: " + data.daily.temperature_2m_min[0] + " °C";

document.getElementById("wind").textContent =
"Wind Speed: " + data.current_weather.windspeed + " km/h";

});

}