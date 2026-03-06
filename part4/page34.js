import express from "express";
const app=express();
app.set("view engine","ejs")
app.set("views","views")
app.use(express.urlencoded({ extended: true }));
app.listen(8080,()=>console.log("Server started"));
const users=[
    {name:"srujana",email:"srujana@gmail.com",password:"123456"},
    {name:"gayatri",email:"gayatri@gmail.com",password:"543216"},
    {name:"snigdha",email:"snigdha@gmail.com",password:"654321"}  
];
app.get("/login",(req,res)=>{
    res.render("login")
});
app.post("/login",(req,res)=>{
    const { email,password }=req.body;
    const user=users.find((user)=>user.email===email);
    if(user){
        if(user.password===password){
            res.redirect("/")
        }
        else{
           res.redirect("/login")
        }
    }
    else{
        res.redirect("/login")
    }
    res.redirect("/");
});
app.get("/register",(req,res)=>{
    res.render("register")
});
app.get("/",(req,res)=>{
    res.render("dashboard", {users});
});