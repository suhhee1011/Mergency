const map = L.map("map-template").setView([43.6532, -79.3832], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var doctorIcon = L.icon({
    iconUrl: '../image/Ghospital1.png',
    iconSize: [38, 50],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});
var helperIcon = L.icon({
    iconUrl: '../image/helper.png',
    iconSize: [38, 50],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

const patientMarker = new L.marker([43.6552, -79.3822]).addTo(map).bindPopup('Patient: You');
const helperMarker1 = new L.marker([43.6532, -79.3802],{icon : helperIcon}).addTo(map).bindPopup('Helper: Trang Nguyen');
const doctorMarker1 = new L.marker([43.6502, -79.3832],{icon : doctorIcon}).addTo(map).bindPopup('Doctor: Suhhee Kim');
