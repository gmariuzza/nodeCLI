var weatherAdmin = require('./weather-admin.js');
var userOrAdmin = process.argv[2];



if(userOrAdmin.toLowerCase() === 'user') {
	if(process.argv.length === 4) {
		var username = process.argv[3];
	}
	if(process.argv.length === 5) {
		var userLocation = process.argv[4];
		weatherAdmin.newUserSearch(username, userLocation);
	} else {
		console.log('Request format invalid');
	}
} else if(userOrAdmin.toLowerCase() === 'admin') {
	weatherAdmin.getData();
} else {
	console.log('Request format invalid');
}