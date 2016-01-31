var expect = require('chai').expect;
var mongoose = require("mongoose");
var jobModel = require('../models/Job');
var Promise = require("bluebird");

var jobsData = require("../jobs-data.js");


function resetJobsDb() {
    return new Promise(function(resolve,reject) {
        mongoose.connection.collections['jobs'].drop(resolve, reject);
    });
    
}

var connectDB = Promise.promisify(mongoose.connect, {context: mongoose});

function findJobs(query){
    return Promise.cast(mongoose.model('Job').find(query).exec());
}

console.log(connectDB);
// connectDB('mongodb://localhost/jobfinder').then(function(){
//     console.log("this worked...");
// }).catch(function(error){console.log('caught error! = ' + error);});

describe("get jobs", function(){
    
    var jobs;
    before(function(done){
             jobsData.connectDB('mongodb://localhost/jobfinder')
            .then(resetJobsDb)
            .then(jobsData.seedJobs)
            .then(jobsData.findJobs)
            .then(function(collection){
                jobs = collection;
                done();
            });   
    })
    it("should never be empty since jobs are seeded", function(){
        // clear the jobs in the data base to test that the return will fail
        //mongoose.connect('mongodb://localhost/jobfinder',function(){
                expect(jobs.length).to.be.at.least(1);
                });
                
                it("it should have a job with a title", function(){
                    expect(jobs[0].title).to.not.be.empty;
                })
                it("it should have a job with a description", function(){
                    expect(jobs[0].description).to.not.be.empty;
                })
 //           });
   //     });
});