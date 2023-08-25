// Express js is a Nodejs FrameWork.
/* 
Express Js is a web applicataion framework that provides you with a
simple API to build websites , web apps and backends.


Why do we need express js? How is it useful to use with Node Js?
->  Express Js is kinda like an efficient way to use Node js. Its reduces line of codes.
*/

var express = require("express");
var path = require("path");
console.log()
const app = express();



 
//Serving WebPage
app.use(express.static(path.join(__dirname,"../public"))); //This allows the express to serve images/css...etc while rendering the webpage
//app.get(route,callback);
app.get("/",(req,res)=>{
    let staticPath = path.join(__dirname,"../public/index.html") // The path
    res.sendFile(staticPath)
    // res.send("ok amigos lets  go!")
}) 


app.get("/about",(req,res)=>{
    let staticPath = path.join(__dirname,"../public/About.html")
    res.sendFile(staticPath)
})

app.get("/contact",(req,res)=>{
    // const etag = generateETag(); // Generate a unique ETag value
    // res.setHeader('ETag', etag);
    res.setHeader('Cache-Control', 'no-store');
    res.send("This is Contacts Page Amigo!");
})

let obj ={id:1,
    name:"Sarin",
    age:24,
    developer:true
} 


app.get("/json",(req,res)=>{ // Express Converts Raw object to JSON format
    res.setHeader('Cache-Control', 'no-store');
    res.send(obj); //can also use res.json(obj);
})

app.listen(8000,()=>{
    console.log("Listening at port 8000");
})

console.log("changing")