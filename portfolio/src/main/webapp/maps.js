let map;

/* Editable marker that displays when a user clicks in the map. */
let editMarker;
function createMap() {
  map = new google.maps.Map(
    document.getElementById('map'),
    {center: {lat: 9.007354, lng: 38.855677}, zoom: 6.07});
// First, create an object containing LatLng and population for each city.
      var countrymap = {
        amhara: {
          center: {lat: 11.959951, lng: 38.234205},
          population: 3
        },
        oromia: {
          center: {lat: 7.762024, lng: 39.506409},
          population: 2
        },
        tigray: {
          center: {lat: 14.084550, lng: 38.742793},
          population: 1
        },
        addis: {
          center: {lat: 9.009967, lng: 38.755141},
          population: 1
        }
      };

      // Construct the circle for each value in citymap.
        // Note: We scale the area of the circle based on the population.
        for (var region in countrymap) {
          // Add the circle for this city to the map.
          var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: countrymap[region].center,
        
            radius: countrymap[region].population * 100000
          });
              console.log("Hello Wassup");
        }

  // When the user clicks in the map, show a marker with a text box the user can
  // edit.
  map.addListener('click', (event) => {
    createMarkerForEdit(event.latLng.lat(), event.latLng.lng());
  });

  fetchMarkers();

//Lalibela Marker
 var lalibela_contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Rock-hewn Churches of Lalibela </h1>'+
      '<div id="bodyContent">'+
      '<p>Lalibela is a town in the Amhara region of northern Ethiopia. It\'s known for its distinctive rock-cut churches dating from the 12th and 13th centuries, which are pilgrimage sites for Coptic Christians.' +
      'Carved out of rock, the subterranean monoliths include huge Bete Medhane Alem,'+
      'and cross-shaped Bete Giyorgis. Many are joined by tunnels and trenches, and some have carved bas-reliefs and colored frescoes inside.</p>'+
      '</div>'+
      '</div>';

  var lalibela_infowindow = new google.maps.InfoWindow({
    content: lalibela_contentString
  });

  const lalibela = new google.maps.Marker({
    position: {lat: 12.031816, lng: 39.041133},
    map: map,
    title: 'Rock-hewn monolithic churches in Lalibela'
  });

   lalibela.addListener('click', function() {
    lalibela_infowindow.open(map, lalibela);
  });
 
 //Axum Marker
 var axum_contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Axum Obelisk </h1>'+
      '<div id="bodyContent">'+
      '<p>The Obelisk of Axum is a 4th-century CE, 24-metre-tall phonolite stele/obelisk, weighing 160 tonnes, in the city of Axum in Ethiopia.;'+ 
      'It is ornamented with two false doors at the base and features decorations resembling windows on all sides.</p>'+
      '</div>'+
      '</div>';

  var axum_infowindow = new google.maps.InfoWindow({
    content: axum_contentString
  });

  const axum = new google.maps.Marker({
    position: {lat:  14.132044, lng: 38.719184},
    map: map,
    title: 'Obelisk of Axum'
  });

   axum.addListener('click', function() {
    axum_infowindow.open(map, axum);
  });

//Abay Marker
 var abay_contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Blue Nile Falls</h3>'+
      '<div id="bodyContent">'+
      '<p>The Blue Nile Falls is a waterfall on the Blue Nile river in Ethiopia. It is known as Tis Abay in Amharic, meaning "great smoke".'+ 
      'It is situated on the upper course of the river, about 30 km downstream from the town of Bahir Dar and Lake Tana. The falls are one of Ethiopia\'s best known tourist attractions</p>'+
      '</div>'+
      '</div>';

  var abay_infowindow = new google.maps.InfoWindow({
    content: abay_contentString
  });
  const abay = new google.maps.Marker({
    position: {lat:  11.490787, lng: 37.588104},
    map: map,
    title: 'Blue Nile Falls'
  });

   abay.addListener('click', function() {
    abay_infowindow.open(map, abay);
  });

//Fasiledes Marker
 var fasil_contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Emperor Fasil\'s Castel </h1>'+
      '<div id="bodyContent">'+
      '<p>Fasilides, also known as Fasil or Basilide, was emperor of Ethiopia from 1632 to 18 October 1667, and a member of the Solomonic dynasty. His throne name was ʿAlam Sagad, meaning "to whom the world bows".'+ 
      'He was the son of Emperor Susenyos I and Empress Sultana Mogesa of Wagda Katata and Merhabete</p>'+
      '</div>'+
      '</div>';

  var fasil_infowindow = new google.maps.InfoWindow({
    content: fasil_contentString
  });
  
  const fasiledes = new google.maps.Marker({
    position: {lat:  12.607460, lng: 37.470248},
    map: map,
    title: 'The Emperor Fasil Palace'
  });

  fasiledes.addListener('click', function() {
    fasil_infowindow.open(map, fasiledes);
  });

//Unity Marker
var unity_contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Unity Park </h3>'+
      '<div id="bodyContent">'+
      '<p>ADDIS ABABA, Ethiopia — From the grand palace he had constructed on a hill overlooking this city 130 years ago, Emperor Menelik II plotted the brutal campaigns that would consolidate all of what is now Ethiopia under his rule.'+
      'Five successive governments — two more emperors and a communist regime included — would rule from the same palace, '+
     +'orchestrating much of this country’s tragic history from within its walls. Its war rooms were where massacres, purges and ass incarcerations were ordered. Menelik’s basement refrigerator rooms were turned into torture dungeons.'+
      'This week, the latest man to lead Ethiopia from this secretive compound opened most of its grounds to the public. The privately funded, $170 million renovation includes a park, a zoo and a museum of the country’s history, with exhibits adorning walls once stained with the blood of prisoners.</p>'+
      '</div>'+
      '</div>';

  var unity_infowindow = new google.maps.InfoWindow({
    content: unity_contentString
  });
  
  const unitypark = new google.maps.Marker({
    position: {lat:  9.024495, lng: 38.763302},
    map: map,
    title: 'Unity Park and Museum '
  });

  unitypark.addListener('click', function() {
    unity_infowindow.open(map, unitypark);
  });

//Tana Marker
var tana_contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Lake Tana</h1>'+
      '<div id="bodyContent">'+
      '<p>Lake Tana is the source of the Blue Nile and is the largest lake in Ethiopia.'+ 
      +'Located in Amhara Region in the north-western Ethiopian Highlands, the lake is approximately 84 kilometres long and 66 kilometres wide, with a maximum depth of 15 metres, and an elevation of 1,788 metres.</p>'+
      '</div>'+
      '</div>';

  var tana_infowindow = new google.maps.InfoWindow({
    content: tana_contentString
  });
  
  const lake = new google.maps.Marker({
    position: {lat:  12.058484, lng: 37.301597},
    map: map,
    title: 'Lake Tana'
  });

   lake.addListener('click', function() {
    tana_infowindow.open(map, lake);
  });

//Ertale Marker
var ertale_contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Erta Ale Active Volcano </h3>'+
      '<div id="bodyContent">'+
      '<p>Erta Ale is a continuously active basaltic shield volcano in the Afar Region of northeastern Ethiopia. It is situated in the Afar Depression, a badland desert area. Erta Ale is the most active volcano in Ethiopia</p>'+
      '</div>'+
      '</div>';

  var ertale_infowindow = new google.maps.InfoWindow({
    content: ertale_contentString
  });
  const ertale = new google.maps.Marker({
    position: {lat:  13.606599,  lng: 40.661479},
    map: map,
    title: 'Ert Ale active volcanoes'
  });

 ertale.addListener('click', function() {
    ertale_infowindow.open(map, ertale);
  });

//Semein Parker
var semein_contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Semien Mountains</h3>'+
      '<div id="bodyContent">'+
      '<p>The Semien Mountains, in northern Ethiopia, north east of Gondar in Amhara region, are part of the Ethiopian Highlands.'+ 
      'They are a World Heritage Site and include the Simien Mountains National Park.'+
      ' The mountains consist of plateaus separated by valleys and rising to pinnacles.</p>'+
      '</div>'+
      '</div>';

  var semein_infowindow = new google.maps.InfoWindow({
    content: semein_contentString
  });  
  
  const semein = new google.maps.Marker({
    position: {lat:  13.492864,   lng: 38.443622},
    map: map,
    title: 'Semien Mountains'
  });

  semein.addListener('click', function() {
    semein_infowindow.open(map, semein);
  });

}

/** Fetches markers from the backend and adds them to the map. */
function fetchMarkers() {
  fetch('/markers').then(response => response.json()).then((markers) => {
    markers.forEach(
        (marker) => {
            createMarkerForDisplay(marker.lat, marker.lng, marker.content)});
  });
}

/** Creates a marker that shows a read-only info window when clicked. */
function createMarkerForDisplay(lat, lng, content) {
  const marker =
      new google.maps.Marker({position: {lat: lat, lng: lng}, map: map});

  const infoWindow = new google.maps.InfoWindow({content: content});
  marker.addListener('click', () => {
    infoWindow.open(map, marker);
  });
}

/** Sends a marker to the backend for saving. */
function postMarker(lat, lng, content) {
  const params = new URLSearchParams();
  params.append('lat', lat);
  params.append('lng', lng);
  params.append('content', content);

  fetch('/markers', {method: 'POST', body: params});
}

/** Creates a marker that shows a textbox the user can edit. */
function createMarkerForEdit(lat, lng) {
  // If we're already showing an editable marker, then remove it.
  if (editMarker) {
    editMarker.setMap(null);
  }

  editMarker =
      new google.maps.Marker({position: {lat: lat, lng: lng}, map: map});

  const infoWindow =
      new google.maps.InfoWindow({content: buildInfoWindowInput(lat, lng)});

  // When the user closes the editable info window, remove the marker.
  google.maps.event.addListener(infoWindow, 'closeclick', () => {
    editMarker.setMap(null);
  });

  infoWindow.open(map, editMarker);
}

/**
 * Builds and returns HTML elements that show an editable textbox and a submit
 * button.
 */
function buildInfoWindowInput(lat, lng) {
  const textBox = document.createElement('textarea');
  const button = document.createElement('button');
  button.appendChild(document.createTextNode('Submit'));

  button.onclick = () => {
    postMarker(lat, lng, textBox.value);
    createMarkerForDisplay(lat, lng, textBox.value);
    editMarker.setMap(null);
  };

  const containerDiv = document.createElement('div');
  containerDiv.appendChild(textBox);
  containerDiv.appendChild(document.createElement('br'));
  containerDiv.appendChild(button);

  return containerDiv;
}

 
