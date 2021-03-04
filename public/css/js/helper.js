const map = L.map("map-template").setView([43.6532, -79.3832], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const patientMarker = new L.marker([43.6532, -79.3832]).addTo(map).bindPopup('Helper: Nicholas').openPopup();
const helperMarker = new L.marker([43.6432, -79.3832]).addTo(map).bindPopup('Patient: Trang Nguyen').openPopup();


    