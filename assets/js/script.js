let searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', function (event){
    event.preventDefault();

let searchTerm = document.querySelector("#search-input").value;

let APIKey= 'fbcf7778f066307a3dd7159662d3f967';

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm +"&appid=" + APIKey;

fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)

        let cityName = data.name;
        let weather = data.weather.main;
        let temp = data.main.temp;
        let windSpeed = data.wind.speed;
        let humidity = data.main.humidity;

        let todayFC = document.querySelector('#today');
        let todayH1 = document.createElement('h1');
        todayH1.textContent = cityName;
        todayFC.append(todayH1);

    })


})

