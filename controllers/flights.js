var Flights = require('../models/flight');

module.exports = {
	index,
	new: newFlight,
	create,
	show
};

function show(req, res) {
	Flights.findById(req.params.id, function(err, flight) {
		console.log(req.params.id);
		res.render('flights/show', { flight });
	});
}
function index(req, res) {
	Flights.find({}, function(err, flights) {
		res.render('flights/index', { flights });
	});
}
function newFlight(req, res) {
	res.render('flights/new');
}

function create(req, res) {
	var flight = new Flights(req.body);
	flight.save(function(err) {
		if (err) return res.redirect('/flights/new');
		console.log(flight);
		res.redirect('/flights');
	});
}
