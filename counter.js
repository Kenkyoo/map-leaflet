export default function getLocation(callback) {
  const status = document.querySelector("#status");


  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    callback({ lat, lon });
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

