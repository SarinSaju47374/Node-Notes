const fs = require("node:fs/promises");
console.log(1)
fs.readFile("./data.txt","utf-8")
.then(data=>{
    console.log(data)
}) 
.catch(err=>{console.log(err)})
console.log(2)