var myMap = L.map("map", {
  center: [37.6, -95.665],
  zoom: 5
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);


// Use this link to get the geojson data.
var link = "static/data/map_data.json";

// Grabbing our GeoJSON data..
d3.json(link, function (data) {
  //var metadat=data.metadata
  var Job_Type = data.Job_Type
  var coordinates = data.coordinates
  // console.log(coordinates)
  Object.entries(coordinates).forEach(([key, value]) => {
    // console.log(value[0])
    var heatArray = [];
    var location = value;
    if (location) {
      heatArray.push([location[1], location[0]]);
    }
    var heat = L.heatLayer(heatArray, {
      radius: 20,
      blur: 35
    }).addTo(myMap);


  })

  // var heatArray = [];

  // for (var i = 0; i < coordinates.length; i++) {
  //   var location = coordinates[i].coordinates;

  //   if (location) {
  //     heatArray.push([location[1], location[0]]);
  //   }
  // }



  // Creating a GeoJSON layer with the retrieved data
  //L.geoJson(data).addTo(myMap);
});

//d3.json(url, function (response) {

  //console.log(response);


