module.exports = function (app) {
	var db = app.get('db'),
			ex = require('express'),
			router = ex.Router();


	router.get('/', function (req, res) {

		var parents = new db.Parent().fetchAll({
			withRelated: ['Child']
		})
		.then(function (parents) {

			var message = 'There are ' + parents.length + ' parents in the database';
			if (parents.length > 0) {
				var p = parents.at(0);
				message += JSON.stringify(p.related('Child').toJSON());
			}

			res.send('Welcome to the express template home page. ' + message);
		})
		.catch(function (err) {
			console.error(err);
			res.status(500).send('There was an error connecting to the database');
		});
	});

	router.get('/helloworld', function (req, res) {
		res.send('Hello express template');
	});

	router.post('/', function (req, res) {
		res.send('sorry');
	});

	return router;
};