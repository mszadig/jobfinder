var express = require('express');
var mongoose = require('mongoose');
var jobModel = require('./models/Job');

var app = express();


app.set('views', __dirname);
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

// Add route to the database
// But before the catchall
app.get('/api/jobs', function(req,res){
    mongoose.model('Job').find({}).exec(function(error,collection){
        res.send(collection);
    })
});

//
//Catchall
app.get('*', function(req,res){
    res.render('index');
})



//mongoose.connect('mongodb://localhost/jobfinder');
mongoose.connect('mongodb://sa2:*administrator*@ds051575.mongolab.com:51575/jobfinder-mz');

var conn = mongoose.connection;

conn.once('open',function() {
    console.log('connected to mongodb successfully!');
    jobModel.seedJobs();
    
});

app.listen(process.env.PORT, process.env.IP);