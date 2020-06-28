var mongoose = require('mongoose');
var bcrypt = require("bcryptjs")
var users = new  mongoose.Schema({
    Firstname:String,
    LastName:String,
    Address:String,
    email:String,
    password:String,
    
    todos: [{type: mongoose.Schema.Types.ObjectId, ref: 'blog'}]
})
users.pre('save', function(next) {                                                                                                                                        
    if(this.password) {                                                                                                                                                        
        var salt = bcrypt.genSaltSync(10)                                                                                                                                     
        this.password  = bcrypt.hashSync(this.password, salt)                                                                                                                
    }                                                                                                                                                                          
    next()                                                                                                                                                                     
})  
module.exports = mongoose.model("user", users)