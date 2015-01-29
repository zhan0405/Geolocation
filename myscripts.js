// JavaScript Document



	  
document.addEventListener("DOMContentLoaded", function(){
  
  if( navigator.geolocation ){ 
    //code goes here to find position
    var params = {enableHighAccuracy: false, timeout:3600, maximumAge:60000};
    //enableHighAccuracy means try to use GPS and drain the battery
    //for improved accuracy within a few meters.
    //maximum age is how long to cache the location info
    //timeout is how long to wait for the network to respond after the user says ok
    navigator.geolocation.getCurrentPosition( reportPosition, gpsError, params ); 
    
    //to continually check the position (in case it changes) use
    // navigator.geolocation.watchPosition( reportPosition, gpsError, params)
  }else{
    //browser does not support geolocation api
    alert("Sorry, but your browser does not support location based awesomeness.")
  }
});

function reportPosition( position ){ 
  console.log( position.coords.latitude );
  console.log( position.coords.longitude );
  
var GL = document.createElement("canvas");
GL .id     = "MyCanvas";
GL .width  = 400;
GL .height = 400;
document.body.appendChild(GL);
var canvas = document.getElementById('MyCanvas');
console.log(canvas);
      var context = canvas.getContext('2d');
     var width = 400;
      var height = 400;
      var imageObj = new Image();
	  imageObj.onload = function() {
        context.drawImage(imageObj, 0, 0, width, height);
      };
	  imageObj.src= 'https://maps.googleapis.com/maps/api/staticmap?center='
	  	+ position.coords.latitude + ',' + position.coords.longitude +
		'&size=400x400&zoom=14&markers=color:red%7Clabel:A%7C'
		+position.coords.latitude+','+position.coords.longitude; 
  
  
  
}

function gpsError( error ){   
  var errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}








