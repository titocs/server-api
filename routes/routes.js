'use strict';

module.exports = (app) => {
	let getData = require('../controller/controller');

	app.route('/jawab').post(getData.pushJawab);
}