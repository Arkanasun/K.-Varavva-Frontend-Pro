let weather = fetch('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then(response => response.json())
    .then(data => {
        document.getElementById('temp').textContent = data.main.temp;
        document.getElementById('pressure').textContent = data.main.pressure;
        document.getElementById('description').textContent = data.weather[0].description;
        document.getElementById('humidity').textContent = data.main.humidity;
        document.getElementById('speed').textContent = data.wind.speed;
        document.getElementById('deg').textContent = data.wind.deg;
        document.getElementById('icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    })
    .catch(error => console.error('Ошибка при выполнении запроса:', error));
console.log(JSON.stringify(weather));