document.addEventListener('DOMContentLoaded', function() {

    function updateWeatherData() {
        fetch('/weather')
    
    .then(data => {
      document.getElementById('temperature').textContent = data.temperature + '°C';
      document.getElementById('condition').textContent = data.condition;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
    }

    updateWeatherData();

    const updateWeatherInterval = 60* 1000;
    setInterval(updateWeatherData, updateWeatherInterval);


});