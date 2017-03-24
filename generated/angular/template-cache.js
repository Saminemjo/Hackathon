angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<div class=\"row\" id=header>\n" +
    "  <div class=\"col-xs 12 \">\n" +
    "\n" +
    "  <h1> Lorem ipsum dolor amet </h1><br>\n" +
    "  <button class=\"btn btn-primary\"type=\"button\" name=\"button\">Touch me if you dare !</button>\n" +
    "\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"mycarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "    <!-- Indicators -->\n" +
    "    <ol class=\"carousel-indicators\">\n" +
    "        <li data-target=\"#mycarousel\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "        <li data-target=\"#mycarousel\" data-slide-to=\"1\"></li>\n" +
    "        <li data-target=\"#mycarousel\" data-slide-to=\"2\"></li>\n" +
    "        <li data-target=\"#mycarousel\" data-slide-to=\"3\"></li>\n" +
    "        <li data-target=\"#mycarousel\" data-slide-to=\"4\"></li>\n" +
    "    </ol>\n" +
    "\n" +
    "    <!-- Wrapper for slides -->\n" +
    "    <div class=\"carousel-inner\" role=\"listbox\">\n" +
    "        <div class=\"item\">\n" +
    "            <img src=\"img/slide6.jpg\" data-color=\"lightblue\" alt=\"First Image\">\n" +
    "            <div class=\"carousel-caption\">\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"item\">\n" +
    "            <img src=\"img/slide1.jpg\" data-color=\"firebrick\" alt=\"Second Image\">\n" +
    "            <div class=\"carousel-caption\">\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"item\">\n" +
    "            <img src=\"img/slide8.jpg\" data-color=\"violet\" alt=\"Third Image\">\n" +
    "            <div class=\"carousel-caption\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"item\">\n" +
    "            <img src=\"img/slide11.jpg\" data-color=\"lightgreen\" alt=\"Fourth Image\">\n" +
    "            <div class=\"carousel-caption\">\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"item\">\n" +
    "            <img src=\"img/slide5.jpg\" data-color=\"tomato\" alt=\"Fifth Image\">\n" +
    "            <div class=\"carousel-caption \">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Controls -->\n" +
    "    <a class=\"left carousel-control \" href=\"#mycarousel \" role=\"button \" data-slide=\"prev \">\n" +
    "        <span class=\"glyphicon glyphicon-chevron-left \" aria-hidden=\"true \"></span>\n" +
    "        <span class=\"sr-only \">Previous</span>\n" +
    "    </a>\n" +
    "    <a class=\"right carousel-control \" href=\"#mycarousel \" role=\"button \" data-slide=\"next \">\n" +
    "        <span class=\"glyphicon glyphicon-chevron-right \" aria-hidden=\"true \"></span>\n" +
    "        <span class=\"sr-only \">Next</span>\n" +
    "    </a>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/map.html",
    "<div class=\"coolmap\">\n" +
    "    <div class=\"col-md-3\">\n" +
    "        <form class=\"navbar-form\" role=\"search\">\n" +
    "            <div class=\"input-group add-on\">\n" +
    "                <input class=\"form-control\" placeholder=\"Search\" name=\"srch-term\" id=\"{{cam.title}}\" type=\"text\">\n" +
    "                <div class=\"input-group-btn\">\n" +
    "                    <button class=\"btn btn-default\" type=\"submit\"><i class=\"glyphicon glyphicon-search\"></i></button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <nav class=\"navbar navbar-default navet\">\n" +
    "        <div class=\"container trending\">\n" +
    "            <div map-lazy-load=\"https://maps.google.com/maps/api/js\" map-lazy-load-params=\"{{googleMapsUrl}}\">\n" +
    "\n" +
    "                <ng-map class='mymap' center=\" 45.900,6.117,40.500,3.624\" zoom=\"1\">\n" +
    "                    <div ng-repeat=\"cam in cams\">\n" +
    "                        <custom-marker position=\"{{cam.location.latitude}},{{cam.location.longitude}}\" title=\"{{cam.title}}\">\n" +
    "                            <button class='btnmap' type=\"button\" data-toggle=\"modal\" data-target=\"#{{cam.id}}\">\n" +
    "\n" +
    "</button>\n" +
    "                        </custom-marker>\n" +
    "\n" +
    "                </ng-map>\n" +
    "\n" +
    "                <div class=\"modal-body modalmap\">\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"modal fade \" id=\"{{cam.id}}\" tabindex=\"-1 \" role=\"dialog \" aria-labelledby=\"{{cam.id}} \" aria-hidden=\"true \">\n" +
    "                    <div class=\"modal-dialog \" role=\"document \">\n" +
    "                        <div class=\"modal-content \">\n" +
    "                            <div class=\"modal-header \">\n" +
    "                                <h5 class=\"modal-title \" id=\"{{cam.id}} \">{{cam.title}}</h5>\n" +
    "                                <button type=\"button \" class=\"close \" data-dismiss=\"modal \" aria-label=\"Close \">\n" +
    "          <span aria-hidden=\"true \">&times;</span>\n" +
    "        </button>\n" +
    "                            </div>\n" +
    "                            <div class=\"modal-body \">\n" +
    "                                <a name=\"lkr-timelapse-player \" data-id=\"{{cam.id}} \" data-play=\"day \" href=\"//lookr.com/{{cam.id}}\" target=\"_blank \">{{cam.title}}</a>\n" +
    "                                <script async type=\"text/javascript \" src=\"//api.lookr.com/embed/script/timelapse.js \"></script>\n" +
    "                            </div>\n" +
    "                            <div class=\"modal-footer\">\n" +
    "                                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Home</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.login\" ng-hide=\"auth.isAuthenticated()\">Login</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.register\" ng-hide=\"auth.isAuthenticated()\">Register</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("anon/register.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/webcam.html",
    ""
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.profile\" ng-show=\"auth.isAuthenticated()\">Profile</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Website</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("user/profile.html",
    "Profile de {{user.email}}\n"
  );

}]);
