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
    
 

});