const express=require("express")
const app=express()
app.get("/",function(req,res){
    res.send("Welcome to website");

})
app.listen(3000)