var mongoose = require("mongoose");
//var jobModel = require('../models/Job');
var Promise = require("bluebird");

var curCount = 10;

var Job = mongoose.model('Job');

var findJobs = function (query){
    return Promise.cast(mongoose.model('Job').find(query).exec());
}

var jobs = [
    {title:'Cook', description:'You will be making bagles'},
    {title:'Waiter', description:'You will be putting food on tables'},
    {title:'Programmer', description:'You will be writing code'},
    {title:'Axe Maker', description:'We need many many axes...'}
    ];

exports.findJobs = findJobs;

exports.foo = function () {
    
    var curLength = -1;
    this.findJobs().then(
        function (collection,error) {
            curLength = collection.length;
        });
    return curLength;
}



exports.sayHelloInEnglish = function() {
  return "HELLO";
};


exports.connectDB = Promise.promisify(mongoose.connect, {context: mongoose});

var createJob = Promise.promisify(Job.create, {context: Job });
exports.seedJobs = function(){
        return findJobs({}).then(function(collection){
            if(collection.length == 0){
                return Promise.map(jobs, function(job){
                    return createJob(job);
                })
            }
            
        })
}

