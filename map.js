// Initialize map
function initMap() {
	var options = {
		zoom: 12, 
		center: {lat: 42.352271, lng: -71.05524200000001}, 
		//mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map;
	var loc = [];
	var branch = [];
	
	map = new google.maps.Map(document.getElementById('map'), options);
	var trainStops = [
		"Alewife",
		"Davis",
		"Porter",
		"Harvard",
		"Central",
		"Kendall",
		"Charles",
		"Park",
		"Downtown",
		"South",
		"Broadway",
		"Andrew",
		"JFK_UMASS",
		"North",
		"Wollaston",
		"Quincy Center",
		"Quincy Adams",
		"Braintree",
		"Savin",
		"Fields",
		"Shawmut",
		"Ashmont"
	];

	// Alewife
	var alewife = trainStops[0];
	alewife = new google.maps.Marker({
		position: new google.maps.LatLng(42.395428, -71.142483),
		icon: 'icons8-railway-station-30.png',
		title: "Alewife",
		stop_id: "place-alfcl"
	});
	loc.push(alewife.position);
	alewife.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(alewife, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-alfcl&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, alewife);
			}
		}
		request.send();
	});

	// Davis
	var davis = trainStops[1];
	davis = new google.maps.Marker({
		position: new google.maps.LatLng(42.39674, -71.121815),
		icon: 'icons8-railway-station-30.png',
		title: "Davis",
		stop_id: "place-davis"
	});
	loc.push(davis.position);
	davis.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(davis, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-davis&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, davis);
			}
		}
		request.send();
	});

	// Porter Square
	var porterSquare = trainStops[2];
	porterSquare = new google.maps.Marker({
		position: new google.maps.LatLng(42.3884, -71.11914899999999),
		icon: 'icons8-railway-station-30.png',
		title: "Porter Square",
		stop_id: "place-portr"
	});
	loc.push(porterSquare.position);
	porterSquare.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(porterSquare, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-portr&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, porterSquare);
			}
		}
		request.send();
	});

	// Harvard Square
	var harvardSquare = trainStops[3];
	harvardSquare = new google.maps.Marker({
		position: new google.maps.LatLng(42.373362, -71.118956),
		icon: 'icons8-railway-station-30.png',
		title: "Harvard Square",
		stop_id: "place-harsq"
	});
	loc.push(harvardSquare.position);
	harvardSquare.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(harvardSquare, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-harsq&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, harvardSquare);
			}
		}
		request.send();
	});

	// Central Square
	var centralSquare = trainStops[4];
	centralSquare = new google.maps.Marker({
		position: new google.maps.LatLng(42.365486, -71.103802),
		icon: 'icons8-railway-station-30.png',
		title: "Central Square",
		stop_id: "place-cntsq"
	});
	loc.push(centralSquare.position);
	centralSquare.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(centralSquare, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-cntsq&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, centralSquare);
			}
		}
		request.send();
	});

	// Kendall/MIT
	var KENDALL_MIT = trainStops[5];
	KENDALL_MIT = new google.maps.Marker({
		position: new google.maps.LatLng(42.36249079, -71.08617653),
		icon: 'icons8-railway-station-30.png',
		title: "Kendall/MIT",
		stop_id: "place-knncl"
	});
	loc.push(KENDALL_MIT.position);
	KENDALL_MIT.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(KENDALL_MIT, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-knncl&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, KENDALL_MIT);
			}
		}
		request.send();
	});

	// Charles MGH
	var charlesMGH = trainStops[6];
	charlesMGH = new google.maps.Marker({
		position: new google.maps.LatLng(42.361166, -71.070628),
		icon: 'icons8-railway-station-30.png',
		title: "Charles MGH",
		stop_id: "place-chmnl"
	});
	loc.push(charlesMGH.position);
	charlesMGH.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(charlesMGH, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-chmnl&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, charlesMGH);
			}
		}
		request.send();
	});

	// Park Street
	var parkStreet = trainStops[7];
	parkStreet = new google.maps.Marker({
		position: new google.maps.LatLng(42.35639457, -71.0624242),
		icon: 'icons8-railway-station-30.png',
		title: "Park Street",
		stop_id: "place-pktrm"
	});
	loc.push(parkStreet.position);
	parkStreet.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(parkStreet, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-pktrm&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, parkStreet);
			}
		}
		request.send();
	});

	// Downtown Crossing
	var downtownCrossing = trainStops[8];
	downtownCrossing = new google.maps.Marker({
		position: new google.maps.LatLng(42.355518, -71.060225),
		icon: 'icons8-railway-station-30.png',
		title: "Downtown Crossing",
		stop_id: "place-dwnxg"
	});
	loc.push(downtownCrossing.position);
	downtownCrossing.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(downtownCrossing, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-dwnxg&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, downtownCrossing);
			}
		}
		request.send();
	});

	// South Station
	var southStation = trainStops[9];
	southStation = new google.maps.Marker({
		position: new google.maps.LatLng(42.352271, -71.05524200000001),
		icon: 'icons8-railway-station-30.png',
		title: "South Station",
		stop_id: "place-sstat"
	});
	loc.push(southStation.position);
	southStation.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(southStation, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-sstat&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, southStation);
			}
		}
		request.send();
	});

	// Broadway
	var broadway = trainStops[10];
	broadway = new google.maps.Marker({
		position: new google.maps.LatLng(42.342642, -71.056967),
		icon: 'icons8-railway-station-30.png',
		title: "Broadway",
		stop_id: "place-brdwy"
	});
	loc.push(broadway.position);
	broadway.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(broadway, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-brdwy&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, broadway);
			}
		}
		request.send();
	});

	// Andrew
	var andrew = trainStops[11];
	andrew = new google.maps.Marker({
		position: new google.maps.LatLng(42.330154, -71.057655),
		icon: 'icons8-railway-station-30.png',
		title: "Andrew",
		stop_id: "place-andrw"
	});
	loc.push(andrew.position);
	andrew.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(andrew, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-andrw&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, andrew);
			}
		}
		request.send();
	});

	// JFK/UMASS
	var JFK_UMASS = trainStops[12];
	JFK_UMASS = new google.maps.Marker({
		position: new google.maps.LatLng(42.320685, -71.052391),
		icon: 'icons8-railway-station-30.png',
		title: "JFK_UMASS",
		stop_id: "place-jfk"
	});
	loc.push(JFK_UMASS.position);
	branch.push(JFK_UMASS.position);
	JFK_UMASS.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(JFK_UMASS, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-jfk&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, JFK_UMASS);
			}
		}
		request.send();
	});

	// North Quincy
	var northQuincy = trainStops[13];
	northQuincy = new google.maps.Marker({
		position: new google.maps.LatLng(42.275275, -71.029583),
		icon: 'icons8-railway-station-30.png',
		title: "North Quincy",
		stop_id: "place-nqncy"
	});
	branch.push(northQuincy.position);
	northQuincy.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(northQuincy, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-nqncy&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, northQuincy);
			}
		}
		request.send();
	});

	// Wollaston
	var wollaston = trainStops[14];
	wollaston = new google.maps.Marker({
		position: new google.maps.LatLng(42.2665139, -71.0203369),
		icon: 'icons8-railway-station-30.png',
		title: "Wollaston",
		stop_id: "place-wlsta"
	});
	branch.push(wollaston.position);
	wollaston.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(wollaston, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-wlsta&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText + "Not Available");
				infowindow.open(map, wollaston);
			}
		}
		request.send();
	});

	// Quincy Center
	var quincyCenter = trainStops[15];
	quincyCenter = new google.maps.Marker({
		position: new google.maps.LatLng("42.251809", "-71.005409"),
		icon: 'icons8-railway-station-30.png',
		title: "Quincy Center",
		stop_id: "place-qnctr"
	});
	branch.push(quincyCenter.position);
	quincyCenter.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(quincyCenter, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-qnctr&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, quincyCenter);
			}
		}
		request.send();
	});

	// Quincy Adams
	var quincyAdams = trainStops[16];
	quincyAdams = new google.maps.Marker({
		position: new google.maps.LatLng("42.233391", "-71.007153"),
		icon: 'icons8-railway-station-30.png',
		title: "Quincy Adams",
		stop_id: "place-qamnl"
	});
	branch.push(quincyAdams.position);
	quincyAdams.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(quincyAdams, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-qanml&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, quincyAdams);
			}
		}
		request.send();
	});

	// Braintree
	var braintree = trainStops[17];
	braintree = new google.maps.Marker({
		position: new google.maps.LatLng("42.2078543", "-71.0011385"),
		icon: 'icons8-railway-station-30.png',
		title: "Braintree",
		stop_id: "place-brntn"
	});
	branch.push(braintree.position);
	braintree.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(braintree, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-brntn&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, braintree);
			}
		}
		request.send();
	});

	// Savin Hill
	var savinHill = trainStops[18];
	savinHill = new google.maps.Marker({
		position: new google.maps.LatLng("42.31129", "-71.053331"),
		icon: 'icons8-railway-station-30.png',
		title: "Savin Hill",
		stop_id: "place-shmnl"
	});
	loc.push(savinHill.position);
	savinHill.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(savinHill, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-shmnl&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, savinHill);
			}
		}
		request.send();
	});

	// Fields Corner
	var fieldsCorner = trainStops[19];
	fieldsCorner = new google.maps.Marker({
		position: new google.maps.LatLng("42.300093", "-71.061667"),
		icon: 'icons8-railway-station-30.png',
		title: "Fields Corner",
		stop_id: "place-fldcr"
	});
	loc.push(fieldsCorner.position);
	fieldsCorner.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(fieldsCorner, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-fldcr&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, fieldsCorner);
			}
		}
		request.send();
	});

	// Shawmut
	var shawmut = trainStops[20];
	shawmut = new google.maps.Marker({
		position: new google.maps.LatLng("42.29312583", "-71.06573796000001"),
		icon: 'icons8-railway-station-30.png',
		title: "Shawmut",
		stop_id: "place-smmnl"
	});
	loc.push(shawmut.position);
	shawmut.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(shawmut, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-smmnl&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					if (obj.data[i].attributes.arrival_time == null) {
						console.log("Not Available");
					}
					else {
						outputText += obj.data[i].attributes.arrival_time + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, shawmut);
			}
		}
		request.send();
	});

	// Ashmont
	var ashmont = trainStops[21];
	ashmont = new google.maps.Marker({
		position: {lat: 42.284652, lng: -71.06448899999999},
		icon: 'icons8-railway-station-30.png',
		title: "Ashmont",
		stop_id: "place-asmnl"
	});
	loc.push(ashmont.position);
	ashmont.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(ashmont, 'click', function() {
		var request = new XMLHttpRequest();
		var site = "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-asmnl&page[limit]=10&page[offset]=0&sort=departure_time&api_key=3dbba0da59284658a7892037fff19a22";
		request.open("GET", site, true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				outputText = " ";
				for (var i = 0; i < obj.data.length; i++) {
					var content = obj.data[i].attributes.arrival_time;
					if (content == null) {
						infowindow.setContent("Not Available");
					}
					else {
						outputText += content + "\n";
					}
				}
				infowindow.setContent(outputText);
				infowindow.open(map, ashmont);
			}
		}
		request.send();
	});

	var line = new google.maps.Polyline({
	    path: loc,
	    geodesic: true,
	    strokeColor: '#FF0000',
	    strokeOpacity: 1.0,
	    strokeWeight: 3
	});
	var line2 = new google.maps.Polyline({
	    path: branch,
	    geodesic: true,
	    strokeColor: '#FF0000',
	    strokeOpacity: 1.0,
	    strokeWeight: 3
	});
	line.setMap(map);
	line2.setMap(map);

	if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
		navigator.geolocation.getCurrentPosition(function(position) {
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
			var me = new google.maps.LatLng(myLat, myLng);

			// Update map and go there...
			map.panTo(me);
			
			// Create a marker
			var my_marker = new google.maps.Marker({
				position: me,
				title: "HERE!"
			});
			my_marker.setMap(map);
				
			// Open info window on click of marker
			google.maps.event.addListener(my_marker, 'click', function() {
				infowindow.setContent(my_marker.title);
				infowindow.open(map, my_marker);
			});

			var distanceDiff = [];
			for (var i = 0; i < loc.length; i++) {
				//console.log(init_dist);
				
				var diff = google.maps.geometry.spherical.computeDistanceBetween(me, loc[i]);
				distanceDiff.push(diff);
				distanceDiff.push(me);

				//var moi = [];
				//moi.push(init_dist);
				//moi.push(me);
			}

			// finding closest
			//var smallest = distanceDiff[0];
			//for (var i = 0; i < distanceDiff.length; i++)
			//{
			//	if (distanceDiff[i] < smallest)
			//	{
			//		smallest = distanceDiff[i];
			//	}
				//var init_dist = google.maps.geometry.spherical.computeDistanceBetween(me, smallest);
			//}

			//smallest is pso
			//var moi = [];
			//moi.push(init_dist);
			//moi.push(me);

			var line3 = new google.maps.Polyline({
			    path: distanceDiff,
			    geodesic: true,
			    strokeColor: '#FFF000',
			    strokeOpacity: 1.0,
			    strokeWeight: 3
			});
			line3.setMap(map);
			/*var distance = google.maps.geometry.spherical.computeDistanceBetween(me, davis);
			console.log('found');
			var line3 = new google.maps.Polyline({
			    path: distance,
			    geodesic: true,
			    strokeColor: '#FF0000',
			    strokeOpacity: 1.0,
			    strokeWeight: 3
			});
			line3.setMap(map);*/
		});
	}
	else {
		alert("Geolocation is not supported by your web browser.  What a shame!");
	}
}

