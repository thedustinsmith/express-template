var db = require('../models'),
		ex = require('express'),
		router = ex.Router();


	router.get('/', function (req, res) {
		res.send('Welcome to the express template home page');
	});

	router.get('helloworld', function (req, res) {
		res.send('Hello express template');
	});

	router.post('/', function (req, res) {
		res.send('sorry');
	});


module.exports = router;