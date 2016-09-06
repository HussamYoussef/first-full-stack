var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var blogSchema = new Schema ({
    
    title: String,
    description: String,
    comments: [String]
    
});
    
module.exports = mongoose.model("Blog", blogSchema);