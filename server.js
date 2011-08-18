var express = require('express'),
	logger = require('./lib/logger'),
	server;

server = express.createServer();

server.configure(function configureServer() {
	server.use(express.static(__dirname + '/client'));
	logger.info('App starting');
});

server.get('/', function applicationHome(req, res) {
	res.render('index.jade', {});
});

server.listen(8080);
