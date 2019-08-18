Ticket = require('../models/ticket');

module.exports = {
	new: newTicket,
	create
};

function newTicket(req, res) {
	res.render('tickets/new', { fID: req.params.id });
}
function create(req, res) {
	var ticket = new Ticket(req.body);
	ticket.save(function() {
		res.redirect('/flights');
	});
}
