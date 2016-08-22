// include server and logic
var restify = require('restify'),
    fs = require('fs'),
    adminFunc = require('./adminFunc.js');

db = require('./db.js');


// instantiate server
var server = restify.createServer({
    name: 'Shopfasto server'
});

lastDetected = new Date();
lastIndex = 0;
// set server parameters
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS({
    origins: ['*'],
    headers: ['']
}));
server.use(restify.fullResponse());

server.get('/test', function(req, res, next) {
    console.log('test');
    res.send('123');
});

server.post('/admin', adminFunc.testAdmin);
server.post('/auth', adminFunc.genAuth);
server.post('/login', adminFunc.testLogin);
server.post('/logout', adminFunc.testLogout);
server.post('/reset-password', adminFunc.resetPass);
server.post('/forgot-password', adminFunc.forgotPass);

server.listen(process.env.PORT || 3000, function() {
    console.log('server listening at 3000');
});