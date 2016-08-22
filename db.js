var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// mongoose.connect('mongodb://hitesh464:chill123@c304.candidate.2.mongolayer.com:10304,candidate.3.mongolayer.com:10266/campaign?replicaSet=set-557ff433186226026400055a');
mongoose.connect('mongodb://localhost:27017');
// var admasterSchema = new Schema({ 
//     url: String, 
//     text: String, 
//     id: Number
// });

var userSchema = new Schema({
    name: String,
    twitter: Object,
    google: Object,
    fb: Object,
    username: String,
    password: String,
    last_active: Date,
    state: String,
    country : String,
    email : String,
    securityq : String,
    securitya : String,
    mobile : Number,
    isadmin : Boolean
});

userdb = mongoose.model('userdb', userSchema);
