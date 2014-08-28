var express = require('express'),
		app = express();

app.set('db', require('./models'));

/* Routes */
var home = require('./routes')(app);
app.use('/', home);

app.listen(8000, function() {
	console.log("Server listening on port 8000");
});