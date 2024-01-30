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
        let weatherIcon = data.weather.icon;
        let temp = data.main.temp;
        let windSpeed = data.wind.speed;
        let humidity = data.main.humidity;


        let todayFC = document.querySelector('#today');

        const forecastTitle = function (cityName) {

        let todayH1 = document.createElement('h1');
        todayH1.textContent = cityName;
        todayFC.append(todayH1);
        }

        forecastTitle(cityName);


        let todayTemp = document.createElement('p');
        let convertedTemp = temp - 273.15;

        todayTemp.textContent = "Temp: " + convertedTemp.toFixed(2) + "°C"
        todayFC.append(todayTemp);


        let todayWS = document.createElement('p');
        todayWS.textContent = 'Wind: ' + windSpeed.toFixed(1) + ' KPH'
        todayFC.append(todayWS);

        let todayHumidity = document.createElement('p');
        todayHumidity.textContent = 'Humidity: ' + humidity + '%';
        todayFC.append(todayHumidity);

        const weather = function (weatherIcon) {
        let icon = document.createElement('img');
        switch (weatherIcon) {
            case '01d':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break
            case '02d':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break
            case '03d':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break
            case '04d':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break
            case '09d':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break
            case '10d':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break
            case '11d':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break;
            case '13d':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break
            case '50d':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break
            case '01n':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break
            case '02n':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break
            case '03n':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break
            case '04n':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break
            case '09n':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break
            case '10n':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break
            case '11n':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break;
            case '13n':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break
            case '50n':
                icon.setAttribute('src', weatherIconURL);
                icon.setAttribute('alt', 'weather icon');
                todayFC.append(icon);
                break

        }
        }

        weather(weatherIcon);
    

       
        
    })


})

