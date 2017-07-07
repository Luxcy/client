var station_name=[];
var longitude=[];
var latitude=[];
var station_code=[];
var stations=[];
var colors=[];
//$(document).ready(function(){
$.ajax({ 
    type: "GET",
    url: "http://192.168.95.5:5000/stations",
    dataType: "JSON",
    async:false,
    success: function(data) {
      stations = data.stations;
      for(var i=0;i<data.count;i++)
          colors[i]='#00000';
    },
    error: function(jqXHR){
        alert("发生错误：" + jqXHR.status);  
    },     
});
station_name= stations.map(function(v){return v["Station Name"];});
longitude=stations.map(function(v){return v["Geodetic Longitude"]-180;});
latitude=stations.map(function(v){return v["Geodetic Latitude"];});
station_code=stations.map(function(v){return v["IAGA CODE"];});
//});

