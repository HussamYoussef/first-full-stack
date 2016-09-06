var express = require("express");
var aboutRoutes = express.Router();
var TheBlog = require("../aboutSchema/schema");

aboutRoutes.route("/")
    .get(function (req, res) {
        TheBlog.find(function (err, blog) {
            if (err) {
                res.status(500).send(err);
            } else {
                console.log("success");
                res.send(blogs);
            }
        });
    })

    .post(function(req, res) {
        var newBlog = new TheBlog(req.body);
        newBlog.save(function(err, newBlogObj) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(newBlogObjObj);
            }
        });
    });

aboutRoutes.route("/:id")
    .get(function(req, res) {
        TheBlog.findById(req.params.id, function(err, newBlogObj) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(newBlogObj);
            }
        })
})
    
.put(function(req, res) {
        TheBlog.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedBlog) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(updatedBlog);
            }
        })
    })

    .delete(function(req, res) {
        TheBlog.findByIdAndRemove(req.params.id, function(err, deletedBlog) {
            if (err) {
                res.status(500).send(err);
            } else {
                var responseObj = {
                    success: true,
                    message: "The Blog has been Terminated !",
                    theVote: deletedBlog
                };
                res.send(responseObj);
            }
        });
    });

module.exports = aboutRoutes;