const map = L.map("map-template").setView([43.6532, -79.3832], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var myIcon = L.icon({
    iconUrl: '../image/hospital.png',
    iconSize: [38, 50],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});
const patientMarker = new L.marker([43.6532, -79.3832]).addTo(map).bindPopup('Helper: Nicholas');
const helperMarker = new L.marker([43.6432, -79.3832]).addTo(map).bindPopup('Patient: Trang Nguyen');
const doctorMarker = new L.marker([43.6402, -79.3832],{icon : myIcon}).addTo(map).bindPopup('Doctor: Suhhee Kim');

    