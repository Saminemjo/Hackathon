angular.module('app')
    .controller('WebcamController', function($scope, $http) {
          $http.defaults.headers.common["X-Mashape-Key"] = 'gSfaTTja0bmshVgDSAJexFPYhD2Ep1N86fgjsn4liGSxnv8dNx';

          $http.get('https://webcamstravel.p.mashape.com/webcams/list/country=IT/category=beach/orderby=popularity/limit=20?show=webcams:location,image').then(function (res) {
            console.log(res.data);
          })
    });
