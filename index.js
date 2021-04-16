const express = require('express')
const app = express()
 const port = require('./helper');

 //express.json function is middleware functioon
 //it is  telling express to used incoming parameter as json
 app.use(express.json());

let mdfn2=(req,res,next)=>{
    req.body.surname1="songara";
   next();
}
let mdfn4=function(req,res,next){
    req.body.adress= "daukheda"
    next();
}
let mdfn5=function(req,res,next){
    req.body.mob= "89898988"
    next();
}
let mdfn6=function(req,res,next){
    req.body.age= "21"
    next();
}
let mdfn7=function(req,res,next){
    req.body.adress= "daukheda"
    next();
}
let mdfn8=function(req,res,next){
    req.body.mob= "pravin singh"
    next();
}
app.post('/task2',mdfn2,mdfn4,mdfn5,mdfn6,mdfn7,mdfn8,function (req, res) {
    let n=req.body.name;
    let sur=req.body.surname;
    let add =req.body.adress
    let mob=req.body.mob;
    let age =req.body.age;
   // let mob
    let father=req.body.mob;
  res.send({
      name:n,
      surname:sur,
      address:add,
      mob:mob,
      age:age,
      father:father
  });
})
 
app.listen(port,()=>{
    console.log(`server is ruuning on port ${port}`)
})