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
# Each handle take json data as input as well as return json data

server.post('/admin', adminFunc.testAdmin);

# URL
http://localhost:3000/admin

# INPUT
{"uid": "myid@123.com"}

# OUTPUT
{"isadmin":true}

server.post('/auth', adminFunc.genAuth);

# URL
http://localhost:3000/auth

# INPUT
{"uid": "myid@123.com", "password": "abc", "state": "Delhi", "country": "India", "email": "myid@123.com", "securityq": "Whats ur age", "securitya": "25", "mobile": 9999999999, "isadmin": true}

# OUTPUT
{"auth":true}

server.post('/login', adminFunc.testLogin);

# URL
http://localhost:3000/login

# INPUT
{"uid": "myid@789.com", "upass": "abc"}

# OUTPUT
{"auth":true,"isadmin":true}

server.post('/logout', adminFunc.testLogout);

# URL
http://localhost:3000/logout

# INPUT
{"uid": "myid@123.com"}

# OUTPUT
{"logout": true, "isadmin": false}

server.post('/reset-password', adminFunc.resetPass);

# URL
http://localhost:3000/reset-password

# INPUT
{"uid": "myid@789.com", "oldpass": "abc", "newpass": "xyz"}

# OUTPUT
{"reset":true}

server.post('/forgot-password', adminFunc.forgotPass);

# URL
http://localhost:3000/forgot-password

# INPUT
{"uid": "myid@123.com", "squestion": "Whats ur age", "sanswer": "25" }

# OUTPUT
{"auth":true}
