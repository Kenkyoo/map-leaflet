export default function setMap(id, lat, lon) {

    var map = L.map(id).setView([lat, lon], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([51.5, -0.09]).addTo(map);

    var polygon = L.polygon([
        [lat, lon]
    ]).addTo(map);

    var circle = L.circle([lat, lon], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("This is your location");
    polygon.bindPopup("I am a polygon.");

    var popup = L.popup()
    .setLatLng([lat, lon])
    .setContent("Say Hi!")
    .openOn(map);
}