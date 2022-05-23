const year = document.querySelector('.year').textContent = new Date().getFullYear();

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude,
            lon = position.coords.longitude;
        console.log('Geolocation - Latitude: '+ lat +', Longitude: '+ lon);
    });
}
else {
    console.log('Geolocation is not supported for this Browser/OS version yet.');
}
