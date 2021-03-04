var mymap = L.map('map-template').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',{
          detectRetina: true,
          maxZoom: 18,
          maxNativeZoom: 17,
}).addTo(mymap)

var marker = L.marker([51.5, -0.09]).addTo(mymap);
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);