var app = angular.module("ArmyApp");

app.service("ArmyService", ["$http", function($http)] {
    var self = this;
    this.armyBlog = [];

    this.getBlog = function() {
        return $http.get("http://localhost:8000/militaryblog").then(function(response) {
            console.log("updateBlog response.data: " + response.data);
            self.armyBlog = response.data;
            return response.data;
        });
    };

    this.addBlog = function(newBlog) {
        return $http.post("http://localhost:8000/militaryblog/", newBlog).then(function(response) {
            self.armyBlog.push(response.data);
        });
    };

    this.deleteBlog = function(blog, index) {
        return $http.delete("http://localhost:8000/militaryblog/" + blog._id).then(function(response) {
            self.armyBlog.splice(index, 1);
        });
    };


        
        if (blogWhat === "comment") {
            vote.comments.push(comment)
        }
        
        return $http.put("http://localhost:8000/militaryblog/" + blog._id, vote).then(function(response) {
            self.armyBlog[index] = response.data;
        });

}]);