const weatherData = {
    'Ahmedabad': {
        long: 72.34,
        lat: 23.01,
    },
    'Mumbai': {
        long: 72.57,
        lat: 22.33,
    },
    'Surat': {
        long: 72.50,
        lat: 21.12,
    },
    'Rajkot': {
        long: 70.47,
        lat: 22.18,
    }
};



document.getElementById('getWeatherButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    const weather = weatherData[city];
    const display = document.getElementById('weatherDisplay');
    if (weather) {
        let x= weatherData[city];
        fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&&latitude=${x.lat}&longitude=${x.long}&hourly=temperature_2m`)
        .then(response => response.json())
        .then((data)=>{
            console.log(data.current_weather.temperature);
            display.innerText = `The weather in ${city} is ${data.current_weather.temperature} °C`;
        })
    } else {
        display.innerText = `Weather data for ${city} is not available`;
    }
});