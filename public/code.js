
loadMapsJSAPI();
function runApp() {
    console.log('Maps JS API loaded'); 
    const map = displayMap(); 
    // const markers = addMarkers(map);
    // clusterMarkers(map, markers);
    // addPanToMarker(map, markers);
  }
function loadMapsJSAPI() {
    const googleMapsAPIKey = 'AIzaSyDMkAvYJY_qo-B_GDKbliX6J3aHtHHHyt4';
    const googleMapsAPIURI = `https://maps.googleapis.com/maps/api/js?key=${googleMapsAPIKey}&callback=runApp`;
    
    const script = document.createElement('script');
    script.src = googleMapsAPIURI;
    script.defer = true;
    script.async = true;

    window.runApp = runApp;

    document.head.appendChild(script);
   
}
function displayMap() {
    const mapOptions = {
      center: { lat: -33.860664, lng: 151.208138 },
      zoom: 14
    };
    const mapDiv = document.getElementById('map');
    return new google.maps.Map(mapDiv, mapOptions);
  }
  // function addMarkers(map) {
  //   const locations = {
  //     operaHouse: { lat: -33.8567844, lng: 151.213108 },
  //     tarongaZoo: { lat: -33.8472767, lng: 151.2188164 },
  //     manlyBeach: { lat: -33.8209738, lng: 151.2563253 }

  //   }
  //   const markers = [];
  //   for (const location in locations) {
  //     const markerOptions = {
  //       map: map,
  //       position: locations[location],
  //       icon: './img/custom_pin.png'
  //     }
  //     const marker = new google.maps.Marker(markerOptions);
  //     markers.push(marker);
  //   }
  //   return markers;
  // }
  // function clusterMarkers(map, markers) {
  //   const clustererOptions = { imagePath: './img/m' }
  //   const markerCluster = new MarkerClusterer(map, markers, clustererOptions);
  // }