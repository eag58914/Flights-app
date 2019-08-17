var Flights = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
	index,
	new: newFlight,
	create,
	show
};

function show(req, res) {
	Flights.findById(req.params.id, function(err, flight) {
		Ticket.find({ flight: flight._id }, function(err, tickets) {
			res.render('flights/show', { flight, tickets });
		});
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
