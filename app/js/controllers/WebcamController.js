angular.module('app')
    .controller('WebcamController', function($scope) {
           $http.defaults.headers.common["X-Mashape-Key"] = 'gSfaTTja0bmshVgDSAJexFPYhD2Ep1N86fgjsn4liGSxnv8dNx';
    });
