function createMap() {
  const map = new google.maps.Map(
    document.getElementById('map'),
    {center: {lat: 9.007354, lng: 38.855677}, zoom: 6.07}); 

//Lalibela Marker
  const lalibela = new google.maps.Marker({
    position: {lat: 12.031816, lng: 39.041133},
    map: map,
    title: 'Rock-hewn monolithic churches in Lalibela'
  });

 //Axum Marker
  const axum = new google.maps.Marker({
    position: {lat:  14.132044, lng: 38.719184},
    map: map,
    title: 'Obelisk of Axum'
  });

//Abay Marker
  const abay = new google.maps.Marker({
    position: {lat:  11.490787, lng: 37.588104},
    map: map,
    title: 'Blue Nile Falls'
  });

//Fasiledes Marker
  const fasiledes = new google.maps.Marker({
    position: {lat:  12.607460, lng: 37.470248},
    map: map,
    title: 'The Emperor Fasil Palace'
  });

//Unity Marker
  
  const unitypark = new google.maps.Marker({
    position: {lat:  9.024495, lng: 38.763302},
    map: map,
    title: 'Unity Park and Museum '
  });

//Tana Marker
  const lake = new google.maps.Marker({
    position: {lat:  12.058484, lng: 37.301597},
    map: map,
    title: 'Lake Tana'
  });

//Ertale Marker
  const ertale = new google.maps.Marker({
    position: {lat:  13.606599,  lng: 40.661479},
    map: map,
    title: 'Ert Ale active volcanoes'
  });

//Semein Parker
   const semein = new google.maps.Marker({
    position: {lat:  13.492864,   lng: 38.443622},
    map: map,
    title: 'Semien Mountains'
  });

}