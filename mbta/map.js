// Initialize map
function initMap() {
	var options = {
		zoom: 12, 
		center: {lat: 42.352271, lng: -71.05524200000001}, 
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	// array to store locations of all markers
	var loc = [];
	// additional array to store branching locations
	var branch = [];
	
	var map = new google.maps.Map(document.getElementById('map'), options);

	// global variable to represent display window
	infowindow = new google.maps.InfoWindow();

	// Alewife
	var alewife = new google.maps.Marker({
		position: new google.maps.LatLng(42.395428, -71.142483),
		icon: 'icons8-railway-station-30.png'
	});
	loc.push(alewife.position);
	alewife.setMap(map);
	
	google.maps.event.addListener(alewife, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-alfcl&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Alewife):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Alewife):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, alewife);
			}
		}
		request.send();
	});

	// Davis
	var davis = new google.maps.Marker({
		position: new google.maps.LatLng(42.39674, -71.121815),
		icon: 'icons8-railway-station-30.png'
	});
	loc.push(davis.position);
	davis.setMap(map);
	
	google.maps.event.addListener(davis, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-davis&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Davis):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Davis):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, davis);
			}
		}
		request.send();
	});

	// Porter Square
	var porterSquare = new google.maps.Marker({
		position: new google.maps.LatLng(42.3884, -71.11914899999999),
		icon: 'icons8-railway-station-30.png'
	});
	loc.push(porterSquare.position);
	porterSquare.setMap(map);
	
	google.maps.event.addListener(porterSquare, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-portr&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Porter Square):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Porter Square):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, porterSquare);
			}
		}
		request.send();
	});

	// Harvard Square
	var harvardSquare = new google.maps.Marker({
		position: new google.maps.LatLng(42.373362, -71.118956),
		icon: 'icons8-railway-station-30.png'
	});
	loc.push(harvardSquare.position);
	harvardSquare.setMap(map);
	
	google.maps.event.addListener(harvardSquare, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-harsq&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Harvard Square):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Harvard Square):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, harvardSquare);
			}
		}
		request.send();
	});

	// Central Square
	var centralSquare = new google.maps.Marker({
		position: new google.maps.LatLng(42.365486, -71.103802),
		icon: 'icons8-railway-station-30.png'
	});
	loc.push(centralSquare.position);
	centralSquare.setMap(map);
	
	google.maps.event.addListener(centralSquare, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-cntsq&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Central Square):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Central Square):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, centralSquare);
			}
		}
		request.send();
	});

	// Kendall/MIT
	var KENDALL_MIT = new google.maps.Marker({
		position: new google.maps.LatLng(42.36249079, -71.08617653),
		icon: 'icons8-railway-station-30.png'
	});
	loc.push(KENDALL_MIT.position);
	KENDALL_MIT.setMap(map);

	google.maps.event.addListener(KENDALL_MIT, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-knncl&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Kendall/MIT):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Kendall/MIT):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, KENDALL_MIT);
			}
		}
		request.send();
	});

	// Charles MGH
	var charlesMGH = new google.maps.Marker({
		position: new google.maps.LatLng(42.361166, -71.070628),
		icon: 'icons8-railway-station-30.png'
	});
	loc.push(charlesMGH.position);
	charlesMGH.setMap(map);
	
	google.maps.event.addListener(charlesMGH, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-chmnl&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Charles MGH):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Charles MGH):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, charlesMGH);
			}
		}
		request.send();
	});

	// Park Street
	var parkStreet = new google.maps.Marker({
		position: new google.maps.LatLng(42.35639457, -71.0624242),
		icon: 'icons8-railway-station-30.png'
	});
	loc.push(parkStreet.position);
	parkStreet.setMap(map);
	
	google.maps.event.addListener(parkStreet, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-pktrm&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Park Street):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Park Street):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, parkStreet);
			}
		}
		request.send();
	});

	// Downtown Crossing
	var downtownCrossing = new google.maps.Marker({
		position: new google.maps.LatLng(42.355518, -71.060225),
		icon: 'icons8-railway-station-30.png'
	});
	loc.push(downtownCrossing.position);
	downtownCrossing.setMap(map);
	
	google.maps.event.addListener(downtownCrossing, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-dwnxg&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Downtown Crossing):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Downtown Crossing):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, downtownCrossing);
			}
		}
		request.send();
	});

	// South Station
	var southStation = new google.maps.Marker({
		position: new google.maps.LatLng(42.352271, -71.05524200000001),
		icon: 'icons8-railway-station-30.png'
	});
	loc.push(southStation.position);
	southStation.setMap(map);

	google.maps.event.addListener(southStation, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-sstat&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (South Station):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (South Station):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, southStation);
			}
		}
		request.send();
	});

	// Broadway
	var broadway = new google.maps.Marker({
		position: new google.maps.LatLng(42.342642, -71.056967),
		icon: 'icons8-railway-station-30.png'
	});
	loc.push(broadway.position);
	broadway.setMap(map);

	google.maps.event.addListener(broadway, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-brdwy&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Broadway):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Broadway):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, broadway);
			}
		}
		request.send();
	});

	// Andrew
	var andrew = new google.maps.Marker({
		position: new google.maps.LatLng(42.330154, -71.057655),
		icon: 'icons8-railway-station-30.png'
	});
	loc.push(andrew.position);
	andrew.setMap(map);

	google.maps.event.addListener(andrew, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-andrw&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Andrew):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Andrew):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, andrew);
			}
		}
		request.send();
	});

	// JFK/UMASS
	var JFK_UMASS = new google.maps.Marker({
		position: new google.maps.LatLng(42.320685, -71.052391),
		icon: 'icons8-railway-station-30.png'
	});
	loc.push(JFK_UMASS.position);
	branch.push(JFK_UMASS.position);
	JFK_UMASS.setMap(map);
	
	google.maps.event.addListener(JFK_UMASS, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-jfk&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (JFK/UMASS):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (JFK/UMASS):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, JFK_UMASS);
			}
		}
		request.send();
	});

	// North Quincy
	var northQuincy = new google.maps.Marker({
		position: new google.maps.LatLng(42.275275, -71.029583),
		icon: 'icons8-railway-station-30.png'
	});
	branch.push(northQuincy.position);
	northQuincy.setMap(map);
	
	google.maps.event.addListener(northQuincy, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-nqncy&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (North Quincy):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (North Quincy):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, northQuincy);
			}
		}
		request.send();
	});

	// Wollaston
	var wollaston = new google.maps.Marker({
		position: new google.maps.LatLng(42.2665139, -71.0203369),
		icon: 'icons8-railway-station-30.png'
	});
	branch.push(wollaston.position);
	wollaston.setMap(map);

	google.maps.event.addListener(wollaston, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-wlsta&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Wollaston):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Wollaston):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText + "This station is currently undergoing construction. Train schedule is not available");
				infowindow.open(map, wollaston);
			}
		}
		request.send();
	});

	// Quincy Center
	var quincyCenter = new google.maps.Marker({
		position: new google.maps.LatLng("42.251809", "-71.005409"),
		icon: 'icons8-railway-station-30.png'
	});
	branch.push(quincyCenter.position);
	quincyCenter.setMap(map);

	google.maps.event.addListener(quincyCenter, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-qnctr&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Quincy Center):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Quincy Center):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, quincyCenter);
			}
		}
		request.send();
	});

	// Quincy Adams
	var quincyAdams = new google.maps.Marker({
		position: new google.maps.LatLng("42.233391", "-71.007153"),
		icon: 'icons8-railway-station-30.png'
	});
	branch.push(quincyAdams.position);
	quincyAdams.setMap(map);

	google.maps.event.addListener(quincyAdams, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-qamnl&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Quincy Adams):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Quincy Adams):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, quincyAdams);
			}
		}
		request.send();
	});

	// Braintree
	var braintree = new google.maps.Marker({
		position: new google.maps.LatLng("42.2078543", "-71.0011385"),
		icon: 'icons8-railway-station-30.png'
	});
	branch.push(braintree.position);
	braintree.setMap(map);
	
	google.maps.event.addListener(braintree, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-brntn&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Braintree):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Braintree):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, braintree);
			}
		}
		request.send();
	});

	// Savin Hill
	var savinHill = new google.maps.Marker({
		position: new google.maps.LatLng("42.31129", "-71.053331"),
		icon: 'icons8-railway-station-30.png'
	});
	loc.push(savinHill.position);
	savinHill.setMap(map);
	
	google.maps.event.addListener(savinHill, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-shmnl&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Savin Hill):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Savin Hill):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, savinHill);
			}
		}
		request.send();
	});

	// Fields Corner
	var fieldsCorner = new google.maps.Marker({
		position: new google.maps.LatLng("42.300093", "-71.061667"),
		icon: 'icons8-railway-station-30.png'
	});
	loc.push(fieldsCorner.position);
	fieldsCorner.setMap(map);
	
	google.maps.event.addListener(fieldsCorner, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-fldcr&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Fields Corner):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Fields Corner):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, fieldsCorner);
			}
		}
		request.send();
	});

	// Shawmut
	var shawmut = new google.maps.Marker({
		position: new google.maps.LatLng("42.29312583", "-71.06573796000001"),
		icon: 'icons8-railway-station-30.png'
	});
	loc.push(shawmut.position);
	shawmut.setMap(map);

	google.maps.event.addListener(shawmut, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-smmnl&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Shawmut):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Shawmut):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, shawmut);
			}
		}
		request.send();
	});

	// Ashmont
	var ashmont = new google.maps.Marker({
		position: {lat: 42.284652, lng: -71.06448899999999},
		icon: 'icons8-railway-station-30.png'
	});
	loc.push(ashmont.position);
	ashmont.setMap(map);

	google.maps.event.addListener(ashmont, 'click', function() {
		var request = new XMLHttpRequest();
		key = "3dbba0da59284658a7892037fff19a22";
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-asmnl&page[limit]=10&page[offset]=0&sort=departure_time&api_key=" + key;
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var theData = request.responseText;
				var obj = JSON.parse(theData);
				outputText = "";
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var content = obj.data[i].attributes.arrival_time;
					if (obj.data[i].attributes.direction_id == 1) {
						var arrival = new Date(content);
						var timeLeft = new Date(arrival - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Arriving Train (Ashmont):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				for (var i = 0; i < obj.data.length; i++) {
					theData = "<tr>";
					var otherContent = obj.data[i].attributes.departure_time;
					if (obj.data[i].attributes.direction_id == 0) {
						var departure = new Date(otherContent);
						var timeLeft = new Date(departure - new Date()).toISOString().substr(11, 8);
						theData += "<td><strong> Departing Train (Ashmont):  </strong></td>" + timeLeft + "<br>";
						outputText += theData + "<br>";
					}
					theData = "</tr>";
				}
				infowindow.setContent(outputText);
				infowindow.open(map, ashmont);
			}
		}
		request.send();
	});

	// Adds line to route
	var line = new google.maps.Polyline({
	    path: loc,
	    geodesic: true,
	    strokeColor: 'red',
	    strokeOpacity: 1.0,
	    strokeWeight: 3
	});

	var line2 = new google.maps.Polyline({
	    path: branch,
	    geodesic: true,
	    strokeColor: 'red',
	    strokeOpacity: 1.0,
	    strokeWeight: 3
	});

	line.setMap(map);
	line2.setMap(map);
	
	// if the navigator.geolocation object is supported on your browser
	if (navigator.geolocation) { 
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
			var me = new google.maps.LatLng(myLat, myLng);

			// Update map and go there...
			map.panTo(me);
			
			// Create a marker
			var my_marker = new google.maps.Marker({
				position: me
			});
			my_marker.setMap(map);
			
			var distanceDiff = [];
			for (var i = 0; i < loc.length; i++) {
				// compute difference in distance from me for all stops
				var diff = (google.maps.geometry.spherical.computeDistanceBetween(me, loc[i]) * 0.000621371192).toFixed(3);
				distanceDiff.push(diff);
			}

			// finding closest
			var smallest = distanceDiff[0];
			var index = 0;
			for (var i = 0; i < distanceDiff.length; i++)
			{
				if (distanceDiff[i] < smallest)
				{
					smallest = distanceDiff[i];
					index = i;
				}
			}

			var closest = [];
			closest.push(loc[index]);
			closest.push(me);

			// Open info window on click of marker
			google.maps.event.addListener(my_marker, 'click', function() {
				infowindow.setContent("The closest MBTA Red Line subway station to you is " + distanceDiff[index] + " miles away");
				infowindow.open(map, my_marker);
			});

			var line3 = new google.maps.Polyline({
			    path: closest,
			    geodesic: true,
			    strokeColor: 'orange',
			    strokeOpacity: 1.0,
			    strokeWeight: 3
			});
			line3.setMap(map);
		});
	}
	else {
		alert("Geolocation is not supported by your web browser.  What a shame!");
	}
}

