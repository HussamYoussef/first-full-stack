var app = angular.module("ArmyApp");

app.controller("AboutController", ["$scope", "ArmyService", function ($scope, ArmyService) {
    $scope.ArmyService = ArmyService;
    $scope.editing = false;
    
    VoteService.getBlog().then(function (data){
        $scope.postsObject = data;
        console.log(data);
    })

    $scope.addBlog = function (newBlog) {
        ArmyService.addBlog(newBlog);
    }

    $scope.deleteBlog = function (blog, index) {
        ArmyService.deleteBlog(blog, index)
    }

    $scope.addComment = function (blog, index, comment) {
        ArmyService.updateBlog(blog, index, comment, blogWhat = "comment")
    }
    
    