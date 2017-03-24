angular.module('app')

    .controller('WebcamController', function($scope, webcamService) {

      $scope.cams = [];

   webcamService.getAll().then(function(res) {
       $scope.cams = res.data;
       console.log(this);
     });
   });

