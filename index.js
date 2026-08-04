const express=require("express");
const app=express();
const path=require("path");

const port=2020;

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/ig/:username",(req,res)=>{
    let username=req.params.username;
    res.render("home.ejs", { username });
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})