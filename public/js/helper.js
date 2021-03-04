const map = L.map("map-template").setView([43.6532, -79.3832], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var doctorIcon = L.icon({
    iconUrl: '../image/hospital.png',
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
const patientMarker1 = new L.marker([43.6532, -79.3812]).addTo(map).bindPopup('Helper: Nicholas');
const patientMarker2 = new L.marker([43.6542, -79.3830]).addTo(map).bindPopup('Helper: Bob');
const patientMarker3 = new L.marker([43.6552, -79.3822]).addTo(map).bindPopup('Helper: James');
const helperMarker1 = new L.marker([43.6532, -79.3802],{icon : helperIcon}).addTo(map).bindPopup('Patient: Trang Nguyen');
const helperMarker2 = new L.marker([43.6502, -79.3852],{icon : helperIcon}).addTo(map).bindPopup('Patient: Ethan');
const helperMarker3 = new L.marker([43.6512, -79.3822],{icon : helperIcon}).addTo(map).bindPopup('Patient: Abdula');
const doctorMarker1 = new L.marker([43.6502, -79.3832],{icon : doctorIcon}).addTo(map).bindPopup('Doctor: Suhhee Kim');
const doctorMarker2 = new L.marker([43.6502, -79.3802],{icon : doctorIcon}).addTo(map).bindPopup('Doctor: Suhhee Kim');
const doctorMarker3 = new L.marker([43.6522, -79.3802],{icon : doctorIcon}).addTo(map).bindPopup('Doctor: Suhhee Kim');
    