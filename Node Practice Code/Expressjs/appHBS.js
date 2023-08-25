// IMPORTANT to run the code with partials using nodemon yuo have to choose from 2 options
// 1: app server and the nodemon.json file must in the root directory with package.json
// 2: OR app server must be in the root directory and run the follwin g code manually to let...
//    nodemon watch the directory "nodemon --watch templates/partials appHBS.js -e hbs" 
var express = require("express");
var path = require("path");
var hbs = require("hbs"); //Is helpful to introduce Partials //Kinda like components in React

const app = express();

let partialPath = path.join(__dirname,"templates/partials")
hbs.registerPartials(partialPath);

//To set the view engine
app.set("view engine","hbs");

//HBS allows us to use Handlebars in Express.js
//template engine route
app.use(express.static(path.join(__dirname,"templates/views")));

//Can change the name "views" if needed
//pp.use(express.static(path.join(__dirname,"../templates")));


//By default app looks up for the views directory in the same directory as of our app. We can change it
app.set('views', path.join(__dirname,'templates/views')); //Changing the default views directory
app.get("/",(req,res)=>{
    res.render("index",{name:"Sarins",state:"Kerala"})
})

app.listen(8000,()=>{
    console.log("Listening at port 8000");
})
console.log("changing");