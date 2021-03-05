var mymap = L.map('map-template').setView([43.6532, -79.3832], 15);
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',{
          detectRetina: true,
          maxZoom: 18,
          maxNativeZoom: 17,
}).addTo(mymap)

var marker = L.marker([43.653, -79.383]).addTo(mymap);
var circle = L.circle([43.652, -79.38], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
var polygon = L.polygon([
    [43.652, -79.38],
    [43.652, -79.38],
    [43.652, -79.38]
]).addTo(mymap);