angular.module('app',['ngResource']);

angular.module('app').controller('testCtrl', function($scope,$resource) {
    
   var jobCount = 0;
    $scope.jobs = $resource('/api/jobs').query();
    $scope.jobCount = $scope.jobs.length;
    jobCount = $scope.jobs.length;
    console.log('testCtrl jobCount = ' + jobCount);
    // $scope.jobs = [{
    //     title: 'Sales Person',
    //     description: 'you will fight dragons'
    // },{
    //     title: 'Accountant',
    //     description: 'you will use the keyboard'
    // }]
});