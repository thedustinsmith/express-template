var express = require('express'),
		app = express();

/* Routes */
var home = require('./routes');
app.use('/', home);

app.listen(8000, function() {
	console.log("Server listening on port 8000");
});