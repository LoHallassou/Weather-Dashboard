// Select the form with id 'search-form'
let searchForm = document.querySelector('#search-form');

// Add an event listener for form submission
searchForm.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Clear the innerHTML of the elements with ids 'today' and 'forecast'
    let todayFC = document.getElementById('today');
    let fiveDayForecast = document.getElementById('forecast');
    todayFC.innerHTML = '';
    fiveDayForecast.innerHTML = '';

    // Get the value entered in the input field with id 'search-input'
    let searchTerm = document.querySelector("#search-input").value;

    // OpenWeatherMap API key
    let APIKey = 'fbcf7778f066307a3dd7159662d3f967';

    // Construct the URL for the current weather data
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=" + APIKey;

    // Fetch the current weather data
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Handle the retrieved data
            console.log(data);

            // Extract relevant data for current weather
            let cityName = data.name;
            let weatherIcon = data.weather.icon;
            let temp = data.main.temp;
            let windSpeed = data.wind.speed;
            let humidity = data.main.humidity;

            // Display the current weather data
            const forecastTitle = function (cityName) {
                let todayH1 = document.createElement('h1');
                todayH1.textContent = cityName + " (" + dayjs().format('DD/MM/YYYY') + ") ";
                todayFC.append(todayH1);
            };

            forecastTitle(cityName);

            let todayTemp = document.createElement('p');
            let convertedTemp = temp - 273.15;
            todayTemp.textContent = "Temp: " + convertedTemp.toFixed(2) + "°C";
            todayFC.append(todayTemp);

            let todayWS = document.createElement('p');
            todayWS.textContent = 'Wind: ' + windSpeed.toFixed(1) + ' KPH';
            todayFC.append(todayWS);

            let todayHumidity = document.createElement('p');
            todayHumidity.textContent = 'Humidity: ' + humidity + '%';
            todayFC.append(todayHumidity);

            const weather = function (weatherIcon) {
                let icon = document.createElement('img');
                // Add a switch statement to handle different weather icons
                switch (weatherIcon) {
                    // Cases for different weather icons
                    case '01d':
                        icon.setAttribute('src', weatherIconURL);
                        icon.setAttribute('alt', 'weather icon');
                        todayFC.append(icon);
                        break;
                    // ... (other cases)
                    default:
                        // Handle default case or do nothing
                        break;
                }
            };

            weather(weatherIcon);
        });

    // Duplicate code for second fetch - update to use different URL and handle data as needed
    var secondQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=" + APIKey;

    fetch(secondQueryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Handle the retrieved data for the second fetch
            console.log(data);
        });
});
