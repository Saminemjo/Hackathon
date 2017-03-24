angular.module('app')
    .controller('MapController', function($scope, webcamService) {
          $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwyfHUk9AJXb8hwaJa73epwM2dPOTRyzg";

          $scope.cams = [];

          webcamService.getAll().then(function(res) {
           $scope.cams = res.data.result.webcams;
   console.log($scope.cams);
          });

    });
