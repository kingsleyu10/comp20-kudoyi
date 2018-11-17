const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

// Mongo initialization and connection to database
var mongoUri = process.env.MONGODB_URI || 'mongodb://heroku_ktc8zcjj:MingWasHere2@ds063150.mlab.com:63150/heroku_ktc8zcjj';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
	db = databaseConnection;
});
const validator = require('validator')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .set('title', '2048 Game Center')
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function(req, res) {
  	res.set('Content-Type', 'text/html');
	var indexPage = "<tr><td>";
	db.collection('scores', function(er, coll) {
		coll.find().sort({"score":-1}).limit(10).toArray(function(err, results) {
			if (!err) {
				indexPage += "<!DOCTYPE HTML><html style=background-color:#ADD8E6><head><title>2048 Game Center</title></head><body><h1>2048 Game Center</h1><table><tr><th>User</th><th>Score</th><th>Created At</th></tr>";
				for (var i = 0; i < results.length; i++) {
					indexPage += "<tr><td>" + results[i].username + "</td><td>" + results[i].score + "</td><td>" + results[i].created_at + "</td></tr>";
				}
				indexPage += "</table></body></html>";
				res.send(indexPage);
			} else {
				res.send('<!DOCTYPE HTML><html><head><title>Score Center</title></head><body><h1>Whoops, something went to terribly wrong!</h1></body></html>');
			}
		});
	});
  })
  .get('/scores.json', function(req, res) {
  	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With");

  	var username = req.query.username;

  	if (req.query.username === undefined) {
  		res.send("[]");
  	} else {
  		db.collection('scores', function(er, coll) {
  			coll.find({"username":username}).sort({"score":-1}).limit(10).toArray(function(err, results) {
  				res.send(JSON.stringify(results));
  			});
  		});
  	}
  })
  .post('/submit', function (req, res) {
  	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With");
  	var username = req.body.username;
  	var score = parseInt(req.body.score);
  	var grid = req.body.grid;
  	// Removes all special characters
  	username = username.replace(/[^\w\s]/gi, ''); 
  	if (username != undefined && score != undefined && grid != undefined) {
	  	var toInsert = {
	  		"username": username,
	  		"score": score,
	  		"grid": grid,
	  		"created_at": Date()
	  	};
	  	db.collection('scores', function(error, coll) {
	  		coll.insert(toInsert, function(error, saved) {
	  			if (error) {
					res.send(500);
				} else if (!saved) {
					res.send(500);
				}
				else {
					res.send('<html><head><title>Thanks!</title></head><body><h2>Thanks for your submission!</h2></body></html>');
				}
	  		});
	  	});
	}
  })
  .listen(PORT, () => console.log(`Listening on + ${ PORT }`))
