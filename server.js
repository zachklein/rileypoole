// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var cors = require('cors');       // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

app.use(cors());

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// <-- route middleware and first route are here

// on routes that end in /bears
// ----------------------------------------------------
router.route('/locations.json')
    // get all the bears (accessed at GET http://localhost:8080/api/locations)
    .get(function(req, res) {
        Location.find(function(err, locations) {
            if (err)
                res.send(err);

            res.json(locations);
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

var mongoose   = require('mongoose');
var uristring =
process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/poole';
mongoose.connect(uristring);
var Location     = require('./app/models/location');