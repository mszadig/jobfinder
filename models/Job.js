var mongoose = require("mongoose");
//var Promise = require('bluebird');


var jobSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String}
});

// register the Job schema model with mongoose

mongoose.model('Job', jobSchema);

//var Job = mongoose.model('Job', jobSchema);

// var jobs = [
//     {title:'Cook', description:'You will be making bagles'},
//     {title:'Waiter', description:'You will be putting food on tables'},
//     {title:'Programmer', description:'You will be writing code'},
//     {title:'Axe Maker', description:'We need many many axes...'}
//     ];

// function findJobs(query){
//     return Promise.cast(mongoose.model('Job').find(query).exec());
// }

// var createJob = Promise.promisify(Job.create, {context: Job });
// exports.seedJobs = function(){
//         return findJobs({}).then(function(collection){
//             if(collection.length == 0){
//                 return Promise.map(jobs, function(job){
//                     return createJob(job);
//                 })
//             }
            
//         })


// Earlier implementation
// exports.seedJobs = function(){
//     return new Promise(function(resolve,reject){
//         Job.find({}).exec(function(error,collection){
//             if(collection.length == 0){
//                 Job.create({title:'Cook', description:'You will be making bagles'});
//                 Job.create({title:'Waiter', description:'You will be putting food on tables'});
//                 Job.create({title:'Programmer', description:'You will be writing code'});
//                 // Messy fix to call the call back  it will work but there will be a later solution
//                 Job.create({title:'Axe Maker', description:'YWe need many many axes...'},resolve)
//             }
            
//         })
//     });
// }