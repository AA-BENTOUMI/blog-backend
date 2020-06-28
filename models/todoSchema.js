var mongoose = require("mongoose");
var todoSchema = new mongoose.Schema({
   image:String,
   titre:String,
   article:String,
})
module.exports = mongoose.model("blog", todoSchema)   