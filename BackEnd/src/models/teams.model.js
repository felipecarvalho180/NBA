const { Schema, model } = require('mongoose');

const TeamsSchema = new Schema({
	city: {
		type: String,
	},
	fullName: {
		type: String,
	},
	teamId: {
		type: String,
	},
	nickName: {
		type: String,
	},
	urlName: {
		type: String,
	},
}, {
		timestamps: true,
	});

module.exports = model('Teams', TeamsSchema);