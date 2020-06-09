function createMap() {
  const map = new google.maps.Map(
    document.getElementById('map'),
    {center: {lat: 9.007354, lng: 38.855677}, zoom: 6.07}); 

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