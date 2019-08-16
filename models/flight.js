var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
	airport: {
		type: String,
		enum: [ 'AUS', 'DAL', 'LAX', 'SEA' ]
	},
	arrival: {
		type: Date,
		default: function() {
			return new Date().getFullYear();
		}
	}
});

var flightSchema = new Schema(
	{
		airline: {
			type: String,
			enum: [ 'American', 'Southwest', 'United' ]
		},

		flightNo: {
			type: Number,
			min: 10,
			max: 9999
		},
		airport: {
			type: String,
			enum: [ 'AUS', 'DAL', 'LAX', 'SEA' ]
		},
		destinations: [ destinationSchema ],

		departs: {
			type: Date,
			default: function() {
				var redate = new Date();
				redate.setFullYear(redate.getFullYear() + 1);
				return redate.toLocaleDateString();
			}
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Flight', flightSchema);
