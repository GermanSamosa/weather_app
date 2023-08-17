document.addEventListener('DOMContentLoaded', function() {
    var timeElement = document.getElementById('time');

    function updateTime() {
        var currentTime = new Date();
        var h = currentTime.getHours();
        var m = currentTime.getMinutes();
        var s = currentTime.getSeconds();
        var amPm = h >= 12 ? 'PM' : 'AM';

        h = h % 12 || 12;

        var timeString = h + ':' + addLeadingZero(m) + ':' + addLeadingZero(s) + ' ' + amPm;
    timeElement.textContent = timeString;
    }

    function addLeadingZero(number) {
        return number < 10 ? '0' + number : number;
    }

    setInterval(updateTime, 1000);
    //new step

   
        // Get a reference to the HTML element where you want to display GPU data
const gpuInfoElement = document.getElementById('gpu-info');

// Fetch GPU data from the API
fetch('/gpu_data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle data and update the UI
    const gpuInfo = data.gpu_info;
    
    // Assuming the response format is plain text, you might need to parse it further
    const gpuDataArray = gpuInfo.split('\n'); // Split by new lines

    // Build HTML content to display the GPU data
    let gpuDataHTML = '<ul>';
    gpuDataArray.forEach(item => {
      gpuDataHTML += `<li>${item}</li>`;
    });
    gpuDataHTML += '</ul>';

    // Update the GPU data element with the generated HTML
    gpuInfoElement.innerHTML = gpuDataHTML;
  })
  .catch(error => {
    console.error('Error fetching GPU data:', error);
    gpuInfoElement.innerHTML = 'Error fetching GPU data';
  });
 

});