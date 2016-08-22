# shopFasto
# DB Requirements
mongodb

# node module Requirements
restify
mongoose

# How to run server
cd myServer
npm install
node server.js

# API define in server

server.post('/admin', adminFunc.testAdmin);

server.post('/auth', adminFunc.genAuth);

server.post('/login', adminFunc.testLogin);

server.post('/logout', adminFunc.testLogout);

server.post('/reset-password', adminFunc.resetPass);

server.post('/forgot-password', adminFunc.forgotPass);

# Each handle take json data as input as well as return json data
