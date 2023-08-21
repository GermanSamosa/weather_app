document.addEventListener('DOMContentLoaded', function() {

    //simply explains and loads everything cmd nvidia-smi gives out
    // Get a reference to the HTML element where you want to display GPU data
    const gpuInfoElement = document.getElementById('gpu-info');

    //function with interval, cron jobs arent looking good right now for us
    function fetchGpuData(){
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
      }

      //call function for page load
      fetchGpuData();

      //intervals
      const fetchInterval = 60 * 1000; //ms
      setInterval(fetchGpuData, fetchInterval);

});

   
        