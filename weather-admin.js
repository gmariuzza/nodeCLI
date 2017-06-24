var weather = require("weather-js");



function newUserSearch(user, location){
    this.user = user;
    this.location = location;
    this.date = 
    this.getWeather = function(user,location)
    {
        weather.find({search: location, degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
 
  console.log(JSON.stringify(result, null, 2));
	});
    }
}


function WeatherAdmin(){
	this.readData = function(){
		var fs = require("fs")
		fs.readFile("log.txt", "utf8", function (err, data){
			console.log(data);

			})



	}


}
var fs = require('fs');
var lookup = {
  total: function () {
    fs.readFile('bank.txt', 'utf8', function (err, data) {
      console.log("total:" + 
      data
        .split(',') // convert to array
        .map(d => +d) // convert to decimals     
        .reduce((a, c) => a + c) // add everything together
        .toLocaleString('en-US', { style: 'currency', currency: 'USD' })); //format as currency
    })