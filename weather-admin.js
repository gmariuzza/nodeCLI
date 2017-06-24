var weather = require("weather-js");



function newUserSearch(user, location){
    this.user = user;
    this.location = location;
    this.date = 
    this.getWeather = function{
    }
}


function WeatherAdmin()
{
    this.user=user,
    this.location=locaiton,
    this.newUserSearch=function(user,location)
    {
        weather.find({search: location, degreeType: 'F'}, function(err, result) {
  if(err) console.log(err);
 
  console.log(JSON.stringify(result, null, 2));
});
    },