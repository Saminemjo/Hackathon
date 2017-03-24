angular.module('app')
    .service('mapService', function($http) {
      $http.defaults.headers.common["X-Mashape-Key"] = "gSfaTTja0bmshVgDSAJexFPYhD2Ep1N86fgjsn4liGSxnv8dNx";

        return {
            getAll: function() {
                return $http.get('/users');
            },
            getOne: function(id) {
                return $http.get('/users/' + id);
            },

        };
    });
