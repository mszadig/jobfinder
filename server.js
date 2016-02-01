var express = require('express');
var mongoose = require('mongoose');
var jobModel = require('./models/Job');
var jobsData = require("./jobs-data.js");

var app = express();


app.set('views', __dirname);
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

// Add route to the database
// But before the catchall
app.get('/api/jobs', function(req,res){
    console.log('In app.Get : /api/jobs');
    jobsData.findJobs().then(function(collection){
        //console.log('In app.Get : collected jobs. Count = ' + collection.length);
        res.send(collection);
    })
});

//
//Catchall
app.get('*', function(req,res){
    res.render('index');
})



//mongoose.connect('mongodb://localhost/jobfinder');
//mongoose.connect('mongodb://sa2:*administrator*@ds051575.mongolab.com:51575/jobfinder-mz');


jobsData.connectDB('mongodb://sa2:*administrator*@ds051575.mongolab.com:51575/jobfinder-mz').then(function(){
        console.log('connected to mongodb successfully!');
        //console.log("foo value = " + jobsData.foo());
    jobsData.seedJobs();
    jobsData.findJobs().then(function (collection) {
    console.log('records found = ' + collection.length);
    console.log("sayhello returns " + jobsData.sayHelloInEnglish());
    
    });
});
    


// var conn = mongoose.connection;

// conn.once('open',function() {
//     console.log('connected to mongodb successfully!');
//     jobModel.seedJobs();
//});

app.listen(process.env.PORT, process.env.IP);