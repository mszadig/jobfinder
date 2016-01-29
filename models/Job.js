var mongoose = require("mongoose");

var jobSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String}
});

var Job = mongoose.model('Job', jobSchema);


exports.seedJobs = function(){
    Job.find({}).exec(function(error,collection){
        if(collection.length == 0){
            Job.create({title:'Cook', description:'You will be making bagles'});
            Job.create({title:'Waiter', description:'You will be putting food on tables'});
            Job.create({title:'Programmer', description:'You will be writing code'});
            Job.create({title:'Axe Maker', description:'YWe need many many axes...'});
        }
        
    })
    
}