var express = require('express');
var lessMiddleware = require('less-middleware');

var app = express();

app.use(lessMiddleware(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res, next){
	return res.sendfile('public/index.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function(req, res){
	console.log('DMMM server listening on port', port);
});