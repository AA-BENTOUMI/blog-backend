var express = require("express");
var process = require('process');
var blog = require("./../models/todoSchema");
var multer  = require('multer');
const passport = require("passport");
var router = express.Router();
// var passport = require ('passport');
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.cwd()+'/upload');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now().toString()+'.'+file.originalname.split('.')[file.originalname.split('.').length-1])
  }
});
var upload = multer({storage:storage});

router.post('/:id', passport.authenticate('bearer', { session: false }),upload.single('file'), (req, res) => {
  var link = "http://localhost:3000/upload/" + req.file.filename
  blog.findByIdAndUpdate(req.params.id, {$set:{image:link}},(err,resultat)=>{
    console.log(req.file);
    if(err){ res.send(err);}
    else {res.send(resultat)
    console.log("uploded");
    }
  });
})
module.exports = router;