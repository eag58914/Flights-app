var Flights = require('../models/flight');

module.exports = {
	index,
	new: newFlight
};
function index(req, res) {
	Flights.find({}, function(err, flights) {
		res.render('flights/index', { flights });
	});
}
function newFlight(flight) {
	flight.push(flight);
}
