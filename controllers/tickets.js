Ticket = require('../models/ticket');
// Flight = require('../models/flight');

module.exports = {
	create
};

function create(req, res) {
	req.body.flight = req.params.id;
	Ticket.create(req.body, function(err, tickets) {
		res.redirect(`/flights/${req.params.id}`);
	});
}
