angular.module('app')
    .controller('WebcamController', function($scope, webcamService) {
      $http.defaults.headers.common["X-Mashape-Key"] = 'gSfaTTja0bmshVgDSAJexFPYhD2Ep1N86fgjsn4liGSxnv8dNx';

      $scope.cams = [];

   webcamService.getAll().then(function(res) {
       $scope.cams = res.data;
       console.log(this);
     });
   });
