var express = require('express');
var router = express.Router();
var destinationCTRL = require('../controllers/destination');

router.post('/flights/:id/', destinationCTRL.create);

module.exports = router;
