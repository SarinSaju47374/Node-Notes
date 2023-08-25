let data = [
    {userMail:"sanjuag99@gmail.com",psswd:"bdwajiyo"},
    {userMail:"ramji@gmail.com",psswd:"ramjirao"},
    {userMail:"binta@gmail.com",psswd:"binta"},
    {userMail:"raju@gmail.com",psswd:"raju99"},
    {userMail:"fida@gmail.com",psswd:"fida"},
    {userMail:"fish56@gmail.com",psswd:"fish"},
    {userMail:"rehan@gmail.com",psswd:"rehan198"},
]
// require("./Website1/js/main");    
let dataWrng;
const {loginHandler} = require("./handlers");
const express = require("express");
const path = require("path");
const app = express();
app.set("view engine","hbs");
app.set("views",path.join(__dirname,"Website1"));
app.use(express.static(path.join(__dirname,"/Website1")));
app.use(express.urlencoded({extended:false}));
let myVar = "none";
// console.log(loginHandler);
app.get("/",(req,res)=>{
    if(!dataWrng){
        myVar = "none";
    }else{
        myVar = "flex";
    }
    loginHandler(req,res,myVar);
});
app.post("/login",(req,res)=>{
    let mail = req.body.userMail;
    let psswd = req.body.psswd;
    let user = data.find( u=> u.userMail === mail && u.psswd === psswd);
    if (user) {
    res.send("Credentials match data.");
    } else {
        myVar = "flex";
        res.redirect("/");
    }
   
})
 
// app.post('/warningClosed', (req, res) => {
//     dataWrng = req.body.warningClosed;
//     res.status(200).send('OK');
//   });
app.listen(2500,()=>{
    console.log("Server is running at port 2500");
})