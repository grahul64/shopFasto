exports.testAdmin = function(req, res, next) {
    console.log("admin url call");
    req.body = JSON.parse(req.body);
    var uid = req.body.uid;

    userdb.find({
        'username': uid
    }, {
        isadmin: 1
    }, function(err, result) {
        result.forEach(function(data) {
            console.log("----------------------============= testAdmin Result:=============---------------------", data);
            if(data.isadmin){
                res.send({"isadmin": true});
            }
            else{
                res.send({"isadmin": false});
            }
        });
    });
    res.send({"isadmin": false});
}

exports.genAuth = function(req, res, next) {
    console.log("auth url call");
    req.body = JSON.parse(req.body);
    var uid = req.body.uid;
    var flag = true
    userdb.find({
        'username': uid
    }, {
        password: 1,
        isadmin: 1
    }, function(err, result) {
        result.forEach(function(data) {
            console.log("----------------------============= genAuth Result:=============---------------------", data);
            if(data.password){
            	flag = false
            }
        });
    });
    if(flag){
    	var name = req.body.name;
    	// var twitter = req.body.twitter;
    	// var google = req.body.google;
    	// var fb = req.body.fb;
    	var username = req.body.uid;
    	var password = req.body.password;
    	var last_active = new Date();
    	var state = req.body.state;
    	var country = req.body.country;
    	var email = req.body.email;
    	var securityq = req.body.securityq;
    	var securitya = req.body.securitya;
    	var mobile = req.body.mobile;
    	var isadmin = req.body.isadmin;
	    Syncads.insert({
	            'username': username,
	            'password': password,
	            'last_active': last_active,
	            'state': state,
	            'country': country,
	            'email': email,
	            'securityq': securityq,
	            'securitya': securitya,
	            'name': name,
	            'mobile': mobile,
	            'isadmin': isadmin
	        },
	        function(err, result) {
	            console.log(result);
	            res.send({"auth": true});
	        });
    }
    res.send({"auth": false});
}

exports.testLogin = function(req, res, next) {
    console.log("login url call");
    req.body = JSON.parse(req.body);
    var uid = req.body.uid;
    var upass = req.body.upass;

    userdb.find({
        'username': uid
    }, {
        password: 1,
        isadmin: 1
    }, function(err, result) {
        result.forEach(function(data) {
            console.log("----------------------============= testLogin Result:=============---------------------", data);
            if(data.password === upass){
                if(data.isadmin){
                    res.send({"auth": true,"isadmin": true});
                }
                else{
                    res.send({"auth": true,"isadmin": false});
                }
            }
            else{
                if(data.isadmin){
                    res.send({"auth": false,"isadmin": true});
                }
                else{
                    res.send({"auth": false,"isadmin": false});
                }
            }
        });
    });
    res.send({"auth": false,"isadmin": false});
}

exports.testLogout = function(req, res, next) {
    console.log("logout url call");
    req.body = JSON.parse(req.body);
    var uid = req.body.uid;

    userdb.find({
        'username': uid
    }, {
        isadmin: 1
    }, function(err, result) {
        result.forEach(function(data) {
            console.log("----------------------============= testLogout Result:=============---------------------", data);
            if(data.isadmin){
                res.send({"isadmin": true});
            }
            else{
                res.send({"isadmin": false});
            }
        });
    });
    res.send({"isadmin": false});
}

exports.resetPass = function(req, res, next) {
    console.log("logout url call");
    req.body = JSON.parse(req.body);
    var uid = req.body.uid;
    var opass = req.body.oldpass;
    var npass = req.body.newpass;
    var flag = false;
    userdb.find({
        'username': uid
    }, {
        password: 1,
        isadmin: 1
    }, function(err, result) {
        result.forEach(function(data) {
            console.log("----------------------============= testLogout Result:=============---------------------", data);
            if(data.password === opass){
           		flag = true;
            }
        });
    });
    if(flag){
	    Syncads.update({
	            'username': uid
	        }, {
	            $set: { 'password': npass }
	        }, {
	            multi: true
	        },
	        function(err, result) {
	            console.log(result);
	            res.send({"reset": true});
	        });
    }
    res.send({"reset": false});
}

exports.forgotPass = function(req, res, next) {
    console.log("logout url call");
    req.body = JSON.parse(req.body);
    var uid = req.body.uid;
    var squestion = req.body.squestion;
    var sanswer = req.body.sanswer;

    userdb.find({
        'username': uid
    }, {
        securityq: 1,
        securitya: 1
    }, function(err, result) {
        result.forEach(function(data) {
            console.log("----------------------============= testLogout Result:=============---------------------", data);
            if(data.securityq === squestion){
                if(data.securitya === sanswer){
                    res.send({"auth": true});
                }
            }
        });
    });
    res.send({"auth": false});
}