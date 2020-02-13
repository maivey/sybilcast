d3.csv("OutputData/Max_Temps_2010_2019.csv").then((data) => {
  var hotDates = data.map(x => x.Date)
  d3.csv("OutputData/Min_Temps_2010_2019.csv").then((data) => {
      var coldDates = data.map(x => x.Date)
      createMap(hotDates,coldDates)
  });
});

streetMap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var layers = {
  Year_2010: new L.LayerGroup(),
  Year_2011: new L.LayerGroup(),
  Year_2012: new L.LayerGroup(),
  Year_2013: new L.LayerGroup(),
  Year_2014: new L.LayerGroup(),
  Year_2015: new L.LayerGroup(),
  Year_2016: new L.LayerGroup(),
  Year_2017: new L.LayerGroup(),
  Year_2018: new L.LayerGroup(),
  Year_2019: new L.LayerGroup()
};

var myMap = L.map("map", {
  center: [34.039350, -118.261100],
  zoom: 12,
  layers: [
    layers.Year_2010
    // layers.Year_2011,
    // layers.Year_2012,
    // layers.Year_2013,
    // layers.Year_2014,
    // layers.Year_2015,
    // layers.Year_2016,
    // layers.Year_2017,
    // layers.Year_2018,
    // layers.Year_2019,
  ]
});


streetMap.addTo(myMap)

var overlays = {
  "2010": layers.Year_2010,
  "2011": layers.Year_2011, 
  "2012": layers.Year_2012,
  "2013": layers.Year_2013,
  "2014": layers.Year_2014,
  "2015": layers.Year_2015,
  "2016": layers.Year_2016,
  "2017": layers.Year_2017,
  "2018": layers.Year_2018,
  "2019": layers.Year_2019,
};

L.control.layers(null, overlays).addTo(myMap);

var blackIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
  // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var redIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var blueIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

datastore = []

function createMap(hotDates,coldDates) {
    // Call d3.json() with the JSON file data.json (original repo: server (http://127.0.0.1:5000/data) from app.py)
    d3.json("data.json").then(
      function(d){
        d.map(d => {
          datastore.push(d)

          var newMarker = L.marker([d.lat, d.lon], {
            icon: blackIcon
          });
          var redMarker = L.marker([d.lat, d.lon], {
            icon: redIcon
          });
          var blueMarker = L.marker([d.lat, d.lon], {
            icon: blueIcon
          });

          if (d.date_occ === hotDates.filter(x => x.includes("2010"))[0]) {
            redMarker.addTo(layers.Year_2010);
            redMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === coldDates.filter(x => x.includes("2010"))[0]) {
            blueMarker.addTo(layers.Year_2010);
            blueMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === hotDates.filter(x => x.includes("2011"))[0]) {
            redMarker.addTo(layers.Year_2011);
            redMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === coldDates.filter(x => x.includes("2011"))[0]) {
            blueMarker.addTo(layers.Year_2011);
            blueMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === hotDates.filter(x => x.includes("2012"))[0]) {
            redMarker.addTo(layers.Year_2012);
            redMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === coldDates.filter(x => x.includes("2012"))[0]) {
            blueMarker.addTo(layers.Year_2012);
            blueMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === hotDates.filter(x => x.includes("2013"))[0]) {
            redMarker.addTo(layers.Year_2013);
            redMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === coldDates.filter(x => x.includes("2013"))[0]) {
            blueMarker.addTo(layers.Year_2013);
            blueMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === hotDates.filter(x => x.includes("2014"))[0]) {
            redMarker.addTo(layers.Year_2014);
            redMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === coldDates.filter(x => x.includes("2014"))[0]) {
            blueMarker.addTo(layers.Year_2014);
            blueMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === hotDates.filter(x => x.includes("2015"))[0]) {
            redMarker.addTo(layers.Year_2015);
            redMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === coldDates.filter(x => x.includes("2015"))[0]) {
            blueMarker.addTo(layers.Year_2015);
            blueMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === hotDates.filter(x => x.includes("2016"))[0]) {
            redMarker.addTo(layers.Year_2016);
            redMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === coldDates.filter(x => x.includes("2016"))[0]) {
            blueMarker.addTo(layers.Year_2016);
            blueMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === hotDates.filter(x => x.includes("2017"))[0]) {
            redMarker.addTo(layers.Year_2017);
            redMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === coldDates.filter(x => x.includes("2017"))[0]) {
            blueMarker.addTo(layers.Year_2017);
            blueMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === hotDates.filter(x => x.includes("2018"))[0]) {
            redMarker.addTo(layers.Year_2018);
            redMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === coldDates.filter(x => x.includes("2018"))[0]) {
            blueMarker.addTo(layers.Year_2018);
            blueMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === hotDates.filter(x => x.includes("2019"))[0]) {
            redMarker.addTo(layers.Year_2019);
            redMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }
          else if (d.date_occ === coldDates.filter(x => x.includes("2019"))[0]) {
            blueMarker.addTo(layers.Year_2019);
            blueMarker.bindPopup("<b>" + d.crm_cd_desc + "</b>" + "</br>" + d.time_occ.substring(0,2) + ":" + d.time_occ.substring(2,4) + "</br>" + d.date_occ)
          }

        })

    })
} // Ends createMap() function


function createLegend(myMap) {

  // Legend for earthquakes
  var legend = L.control({position: 'bottomright'});
  legend.onAdd = function(map) {

    var div = L.DomUtil.create('div','info legend')
    div.innerHTML += "<div style = 'text-align: center; background-color: white; border-radius:5px'><table style = 'padding:10; border-radius:5px'><tr style = 'background-color:indianred; padding:10;margin-bottom:5'><td style = 'color:white; font-size:14'>Hot</td></tr><tr style = 'background-color:steelblue; padding:10; margin-bottom:5'><td style = 'color:white; font-size:14'>Cold</td></tr></table></div>"

    return div;
  }
  legend.addTo(myMap)
  
};
createLegend(myMap)