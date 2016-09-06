app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "./about.html",
            controller: "AboutController",
        })

    .when("/information", {
        templateUrl: "./information.html",
    })
}]);