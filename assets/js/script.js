search = document.getElementById("search");
city = document.getElementById("city");
date = new Date();
day = date.getDate();
month = date.getMonth() + 1;
key = "3984ba96abb7dc803a786ec79db08642";
weather = document.getElementById("city-weather");
weather.style.display = 'none';

check = 0;
search.addEventListener("click", () => {
    weather.style.display = 'block';
    check = check + 1;

    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city.value + "&appid=" + key)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            lat = data[0].lat;
            lon = data[0].lon;
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + key)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {

                    //Displays name of city
                    cityName = document.getElementById("city-name");
                    cityName.textContent = data.name;

                    //Displays city's current weather
                    cityWeather = document.getElementById("city-weather");

                    currentDesc = document.createElement("h1");
                    currentDesc.textContent = data.weather[0].description;
                    cityWeather.appendChild(currentDesc)

                    currentTemp = document.createElement("h1");
                    currentTemp.textContent = "Temp: " + ((data.main.temp - 273.15) * 9 / 5 + 32).toFixed(1);
                    cityWeather.appendChild(currentTemp);

                    currentWind = document.createElement("h1");
                    currentWind.textContent = "Wind: " + data.wind.speed + " MPH";
                    cityWeather.appendChild(currentWind);

                    currentHum = document.createElement("h1");
                    currentHum.textContent = "Humidity: " + data.main.humidity + "%";
                    cityWeather.appendChild(currentHum)

                    //Fetch future forecast
                    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + key)
                        .then(function (response) {
                            return response.json()
                        })
                        .then(function (data) {
                            daysList = document.getElementById("days-list");
                            forecast = document.getElementById("forecast");
                            forecast.textContent = "5-Day Forecast:"

                            //Creates a 5 day forecast
                            //Day 1 forecast
                            day1Div = document.createElement("div");
                            day1 = document.createElement("li");
                            day1Date = document.createElement("h1");
                            day1Date.textContent = "(" + month + "/" + (day + 1) + ")";
                            day1Temp = document.createElement("h1");
                            day1Temp.textContent = "Temp: " + ((data.list[0].main.temp - 273.15) * 9 / 5 + 32).toFixed(1);
                            day1Wind = document.createElement("h1");
                            day1Wind.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
                            day1Desc = document.createElement("h1");
                            day1Desc.textContent = data.list[0].weather[0].description;
                            day1Hum = document.createElement("h1");
                            day1Hum.textContent = "Humidity: " + data.list[0].main.humidity + "%";
                            day1Div.appendChild(day1Date);
                            day1Div.appendChild(day1Desc);
                            day1Div.appendChild(day1Temp);
                            day1Div.appendChild(day1Wind);
                            day1Div.appendChild(day1Hum);
                            daysList.appendChild(day1Div);

                            //Day 2 forecast
                            day2Div = document.createElement("div");
                            day2 = document.createElement("li");
                            day2Date = document.createElement("h1");
                            day2Date.textContent = "(" + month + "/" + (day + 2) + ")";
                            day2Temp = document.createElement("h1");
                            day2Temp.textContent = "Temp: " + ((data.list[8].main.temp - 273.15) * 9 / 5 + 32).toFixed(1);
                            day2Wind = document.createElement("h1");
                            day2Wind.textContent = "Wind: " + data.list[8].wind.speed + " MPH";
                            day2Desc = document.createElement("h1");
                            day2Desc.textContent = data.list[8].weather[0].description;
                            day2Hum = document.createElement("h1");
                            day2Hum.textContent = "Humidity: " + data.list[8].main.humidity + "%";
                            day2Div.appendChild(day2Date)
                            day2Div.appendChild(day2Desc)
                            day2Div.appendChild(day2Temp)
                            day2Div.appendChild(day2Wind)
                            day2Div.appendChild(day2Hum);
                            daysList.appendChild(day2Div);

                            //Day 3 forecast
                            day3Div = document.createElement("div");
                            day3 = document.createElement("li");
                            day3Date = document.createElement("h1");
                            day3Date.textContent = "(" + month + "/" + (day + 3) + ")";
                            day3Temp = document.createElement("h1");
                            day3Temp.textContent = "Temp: " + ((data.list[16].main.temp - 273.15) * 9 / 5 + 32).toFixed(1);
                            day3Wind = document.createElement("h1");
                            day3Wind.textContent = "Wind: " + data.list[16].wind.speed + " MPH";
                            day3Desc = document.createElement("h1");
                            day3Desc.textContent = data.list[16].weather[0].description;
                            day3Hum = document.createElement("h1");
                            day3Hum.textContent = "Humidity: " + data.list[16].main.humidity + "%";
                            day3Div.appendChild(day3Date)
                            day3Div.appendChild(day3Desc)
                            day3Div.appendChild(day3Temp)
                            day3Div.appendChild(day3Wind)
                            day3Div.appendChild(day3Hum);
                            daysList.appendChild(day3Div);

                            //Day 4 forecast
                            day4Div = document.createElement("div");
                            day4 = document.createElement("li");
                            day4Date = document.createElement("h1");
                            day4Date.textContent = "(" + month + "/" + (day + 4) + ")";
                            day4Temp = document.createElement("h1");
                            day4Temp.textContent = "Temp: " + ((data.list[24].main.temp - 273.15) * 9 / 5 + 32).toFixed(1);
                            day4Wind = document.createElement("h1");
                            day4Wind.textContent = "Wind: " + data.list[24].wind.speed + " MPH";
                            day4Desc = document.createElement("h1");
                            day4Desc.textContent = data.list[24].weather[0].description;
                            day4Hum = document.createElement("h1");
                            day4Hum.textContent = "Humidity: " + data.list[24].main.humidity + "%";
                            day4Div.appendChild(day4Date)
                            day4Div.appendChild(day4Desc)
                            day4Div.appendChild(day4Temp)
                            day4Div.appendChild(day4Wind)
                            day4Div.appendChild(day4Hum);
                            daysList.appendChild(day4Div)

                            //Day 5 forecast
                            day5Div = document.createElement("div");
                            day5 = document.createElement("li");
                            day5Date = document.createElement("h1");
                            day5Date.textContent = "(" + month + "/" + (day + 5) + ")";
                            day5Temp = document.createElement("h1");
                            day5Temp.textContent = "Temp: " + ((data.list[32].main.temp - 273.15) * 9 / 5 + 32).toFixed(1);
                            day5Wind = document.createElement("h1");
                            day5Wind.textContent = "Wind: " + data.list[32].wind.speed + " MPH";
                            day5Desc = document.createElement("h1");
                            day5Desc.textContent = data.list[32].weather[0].description;
                            day5Hum = document.createElement("h1");
                            day5Hum.textContent = "Humidity: " + data.list[32].main.humidity + "%";
                            day5Div.appendChild(day5Date)
                            day5Div.appendChild(day5Desc)
                            day5Div.appendChild(day5Temp)
                            day5Div.appendChild(day5Wind)
                            day5Div.appendChild(day5Hum);
                            daysList.appendChild(day5Div)

                            //If search button is clicked again page reloads
                            search.addEventListener("click", () => {
                                if (check = 1) {
                                    location.reload()
                                }
                            })
                        })
                })
        })
})

//If user touches inbox again after search page reloads
city.addEventListener("click", () => {
    if (city.value) {
        location.reload()
    }
})