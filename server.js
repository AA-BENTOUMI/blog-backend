var express = require("express");
var jsonparser = require("body-parser")
var nodeMailer = require('nodemailer')
var db = require("./db/database")
var userapi = require('./api/UserApi')
var todos = require('./api/TodoApi')
var AffectTodoTouser = require("./api/AffectTodoToUser")
var DeleleTodoFromUser =require("./api/DeleteTodoFromUser")
var mail = require("./api/mail")
var img = require("./api/upload")
var cors = require("cors")
const passport = require('./api/passport');
var path= require('path')
// var router = express.Router();
var app = express();
jsonwebtoken = require("jsonwebtoken");
app.use(jsonparser.json({limit:'50mb'}))
app.use(jsonparser.urlencoded({limit:'50mb',extended:true,parameterLimit:50000}))
app.use(cors())

app.use("/users", userapi);
app.use("/todos", todos);
app.use("/AffectTodoTouser", AffectTodoTouser);
app.use("/DeleteTodoFromUser", DeleleTodoFromUser)
app.use("/mail",mail)
app.use("/img",img)
app.use('/upload', express.static(path.join(__dirname,'upload')));


app.listen(3000);