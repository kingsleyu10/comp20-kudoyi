// Initialize map
function initMap() {
	var options = {
		zoom: 11, 
		center: {lat: 42.352271, lng: -71.05524200000001}, 
		//mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map;
	var loc = [];
	var branch = [];
	
	map = new google.maps.Map(document.getElementById('map'), options);

	// Alewife
	var alewife = new google.maps.Marker({
		position: {lat: 42.395428, lng: -71.142483},
		icon: 'icons8-railway-station-30.png',
		title: "Alewife"
		//stop_id: place-sstat
	});
	loc.push(alewife.position);
	alewife.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(alewife, 'click', function() {
		infowindow.setContent(alewife.title); infowindow.open(map, alewife);
	});

	// Davis
	var davis = new google.maps.Marker({
		position: {lat: 42.39674, lng: -71.121815},
		icon: 'icons8-railway-station-30.png',
		title: "Davis"
		//stop_id: place-davis
	});
	loc.push(davis.position);
	davis.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(davis, 'click', function() {
		infowindow.setContent(davis.title); infowindow.open(map, davis);
	});

	// Porter Square
	var porterSquare = new google.maps.Marker({
		position: {lat: 42.3884, lng: -71.11914899999999},
		icon: 'icons8-railway-station-30.png',
		title: "Porter Square",
		//stop_id: place-portr
	});
	loc.push(porterSquare.position);
	porterSquare.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(porterSquare, 'click', function() {
		infowindow.setContent(porterSquare.title); infowindow.open(map, porterSquare);
	});

	// Harvard Square
	var harvardSquare = new google.maps.Marker({
		position: {lat: 42.373362, lng: -71.118956},
		icon: 'icons8-railway-station-30.png',
		title: "Harvard Square"
	});
	loc.push(harvardSquare.position);
	harvardSquare.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(harvardSquare, 'click', function() {
		infowindow.setContent(harvardSquare.title); infowindow.open(map, harvardSquare);
	});

	// Central Square
	var centralSquare = new google.maps.Marker({
		position: {lat: 42.365486, lng: -71.103802},
		icon: 'icons8-railway-station-30.png',
		title: "Central Square"
	});
	loc.push(centralSquare.position);
	centralSquare.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(centralSquare, 'click', function() {
		infowindow.setContent(centralSquare.title); infowindow.open(map, centralSquare);
	});

	// Kendall/MIT
	var KENDALL_MIT = new google.maps.Marker({
		position: {lat: 42.36249079, lng: -71.08617653},
		icon: 'icons8-railway-station-30.png',
		title: "Kendall/MIT"
	});
	loc.push(KENDALL_MIT.position);
	KENDALL_MIT.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(KENDALL_MIT, 'click', function() {
		infowindow.setContent(KENDALL_MIT.title); infowindow.open(map, KENDALL_MIT);
	});

	// Charles MGH
	var charlesMGH = new google.maps.Marker({
		position: {lat: 42.361166, lng: -71.070628},
		icon: 'icons8-railway-station-30.png',
		title: "Charles MGH"
	});
	loc.push(charlesMGH.position);
	charlesMGH.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(charlesMGH, 'click', function() {
		infowindow.setContent(charlesMGH.title); infowindow.open(map, charlesMGH);
	});

	// Park Street
	var parkStreet = new google.maps.Marker({
		position: {lat: 42.35639457, lng: -71.0624242},
		icon: 'icons8-railway-station-30.png',
		title: "Park Street"
	});
	loc.push(parkStreet.position);
	parkStreet.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(parkStreet, 'click', function() {
		infowindow.setContent(parkStreet.title); infowindow.open(map, parkStreet);
	});

	// Downtown Crossing
	var downtownCrossing = new google.maps.Marker({
		position: {lat: 42.355518, lng: -71.060225},
		icon: 'icons8-railway-station-30.png',
		title: "Downtown Crossing"
	});
	loc.push(downtownCrossing.position);
	downtownCrossing.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(downtownCrossing, 'click', function() {
		infowindow.setContent(downtownCrossing.title); infowindow.open(map, downtownCrossing);
	});

	// South Station
	var southStation = new google.maps.Marker({
		position: {lat: 42.352271, lng: -71.05524200000001},
		icon: 'icons8-railway-station-30.png',
		title: "South Station"
	});
	loc.push(southStation.position);

	southStation.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(southStation, 'click', function() {
		infowindow.setContent(
			southStation.title); infowindow.open(map, southStation);
	});

	// Broadway
	var broadway = new google.maps.Marker({
		position: {lat: 42.342642, lng: -71.056967},
		icon: 'icons8-railway-station-30.png',
		title: "Broadway"
	});
	loc.push(broadway.position);
	broadway.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(broadway, 'click', function() {
		infowindow.setContent(broadway.title); infowindow.open(map, broadway);
	});

	// Andrew
	var andrew = new google.maps.Marker({
		position: {lat: 42.330154, lng: -71.057655},
		icon: 'icons8-railway-station-30.png',
		title: "Andrew"
	});
	loc.push(andrew.position);
	andrew.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(andrew, 'click', function() {
		infowindow.setContent(andrew.title); infowindow.open(map, andrew);
	});

	// JFK/UMASS
	var JFK_UMASS = new google.maps.Marker({
		position: {lat: 42.320685, lng: -71.052391},
		icon: 'icons8-railway-station-30.png',
		title: "JFK_UMASS"
	});
	loc.push(JFK_UMASS.position);
	branch.push(JFK_UMASS.position);
	JFK_UMASS.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(JFK_UMASS, 'click', function() {
		infowindow.setContent(JFK_UMASS.title); infowindow.open(map, JFK_UMASS);
	});

	// North Quincy
	var northQuincy = new google.maps.Marker({
		position: {lat: 42.275275, lng: -71.029583},
		icon: 'icons8-railway-station-30.png',
		title: "North Quincy"
	});
	branch.push(northQuincy.position);
	northQuincy.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(northQuincy, 'click', function() {
		infowindow.setContent(northQuincy.title); infowindow.open(map, northQuincy);
	});

	// Wollaston
	var wollaston = new google.maps.Marker({
		position: {lat: 42.2665139, lng: -71.0203369},
		icon: 'icons8-railway-station-30.png',
		title: "Wollaston"
	});
	branch.push(wollaston.position);
	wollaston.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(wollaston, 'click', function() {
		infowindow.setContent(wollaston.title); infowindow.open(map, wollaston);
	});

	// Quincy Center
	var quincyCenter = new google.maps.Marker({
		position: {lat: 42.251809, lng: -71.005409},
		icon: 'icons8-railway-station-30.png',
		title: "Quincy Center"
	});
	branch.push(quincyCenter.position);
	quincyCenter.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(quincyCenter, 'click', function() {
		infowindow.setContent(quincyCenter.title); infowindow.open(map, quincyCenter);
	});

	// Quincy Adams
	var quincyAdams = new google.maps.Marker({
		position: {lat: 42.233391, lng: -71.007153},
		icon: 'icons8-railway-station-30.png',
		title: "Quincy Adams"
	});
	branch.push(quincyAdams.position);
	quincyAdams.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(quincyAdams, 'click', function() {
		var request = new XMLHttpRequest();
		request.open("GET", "https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place-qamnl", true);
		request.onreadystatechange = function () {
			if (request.readyState == 4 && request.status == 200) {
				var obj = JSON.parse(request.responseText);
				console.log(obj);
				infowindow.setContent(obj.data[0].attributes); infowindow.open(map, quincyAdams);
			}
		}
		request.send();
	});

	// Braintree
	var braintree = new google.maps.Marker({
		position: {lat: 42.2078543, lng: -71.0011385},
		icon: 'icons8-railway-station-30.png',
		title: "Braintree"
	});
	branch.push(braintree.position);
	braintree.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(braintree, 'click', function() {
		infowindow.setContent(braintree.title); infowindow.open(map, braintree);
	});

	// Savin Hill
	var savinHill = new google.maps.Marker({
		position: {lat: 42.31129, lng: -71.053331},
		icon: 'icons8-railway-station-30.png',
		title: "Savin Hill"
	});
	loc.push(savinHill.position);
	savinHill.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(savinHill, 'click', function() {
		infowindow.setContent(savinHill.title); infowindow.open(map, savinHill);
	});

	// Fields Corner
	var fieldsCorner = new google.maps.Marker({
		position: {lat: 42.300093, lng: -71.061667},
		icon: 'icons8-railway-station-30.png',
		title: "Fields Corner"
	});
	loc.push(fieldsCorner.position);
	fieldsCorner.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(fieldsCorner, 'click', function() {
		infowindow.setContent(fieldsCorner.title); infowindow.open(map, fieldsCorner);
	});

	// Shawmut
	var shawmut = new google.maps.Marker({
		position: {lat: 42.29312583, lng: -71.06573796000001},
		icon: 'icons8-railway-station-30.png',
		title: "Shawmut"
	});
	loc.push(shawmut.position);
	shawmut.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(shawmut, 'click', function() {
		infowindow.setContent(shawmut.title); infowindow.open(map, shawmut);
	});

	// Ashmont
	var ashmont = new google.maps.Marker({
		position: {lat: 42.284652, lng: -71.06448899999999},
		icon: 'icons8-railway-station-30.png',
		title: "Ashmont"
	});
	loc.push(ashmont.position);
	ashmont.setMap(map);

	var infowindow = new google.maps.InfoWindow();
	google.maps.event.addListener(ashmont, 'click', function() {
		infowindow.setContent(ashmont.title); infowindow.open(map, ashmont);
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
			me = new google.maps.LatLng(myLat, myLng);

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

