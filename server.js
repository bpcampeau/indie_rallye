// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Entry      = require('./data/schema/entry');
mongoose.connect('mongodb://127.0.0.1:27017/indie_rally');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

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

router.route('/entry')

    // create a bear (accessed at POST http://localhost:8080/api/entry)
    .post(function(req, res) {

        var entry = new Entry();      // create a new instance of the Bear model
        entry.indie_zone = req.body.indie_zone;
        entry.indie_village = req.body.indie_village;
        entry.name = req.body.name;
        entry.lastName = req.body.lastName;
        entry.phone = req.body.phone;
        entry.email = req.body.email;
        entry.favorite = req.body.favorite;
        entry.email_consent = req.body.email_consent;
        
        // save the bear and check for errors
        entry.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Entry created!' });
        });

    })

    .get(function(req, res) {
        Entry.find(function(err, entries) {
            if (err)
                res.send(err);

            res.json(entries);
        });
    });
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
