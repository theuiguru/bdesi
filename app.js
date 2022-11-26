const year = document.querySelector('.year').textContent = new Date().getFullYear();
const bdesi = document.querySelector('.bdesi');
bdesi.addEventListener('click', geolocate);
function geolocate() {
  if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.log('Latitude: ' + lat + ', Longitiude: ' + lon);
    });
  } else {
    console.log('Geolocation not available.');
  }
}
