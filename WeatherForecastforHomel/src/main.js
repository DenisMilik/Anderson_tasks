var searchButton = document.getElementById("search-button");
var searchInput = document.getElementById("search-input")
var citySpan = document.getElementById("city");
var temperatureSpan = document.getElementById("temperature");
var weatherSpan = document.getElementById("weather");

searchButton.onclick = getWeather;

function getWeather() {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + searchInput.value + '&APPID=1936d337d5ef63fc19d6a97de6a8f5f9';

    fetch(url)
        .then(function (response) {
            if(response.ok)
                return response.json();
            else
                alert("Error!");
        })
        .then(function (response) {
            citySpan.innerText = response.name;
            temperatureSpan.innerText = Math.round(response.main.temp - 273.15) + '°C';
            weatherSpan.innerText = response.weather[0].main;
        })
        .catch(alert);
}



