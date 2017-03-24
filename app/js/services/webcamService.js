angular.module('app')
    .service('webcamService', function($http) {
      //$http.defaults.headers.common["X-Mashape-Key"] = "gSfaTTja0bmshVgDSAJexFPYhD2Ep1N86fgjsn4liGSxnv8dNx";

        return {
            getAll: function() {
                return $http.get("https://webcamstravel.p.mashape.com/webcams/list/orderby=popularity,desc/category=city/limit=2000?show=webcams:location,url,image&mashape-key=gSfaTTja0bmshVgDSAJexFPYhD2Ep1N86fgjsn4liGSxnv8dNx");
            },

        };
    });
