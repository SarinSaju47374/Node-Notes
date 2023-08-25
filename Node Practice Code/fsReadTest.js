const fs = require("fs");
let data=[];
// console.log(data[1].userMail);
// data.push({userMail:'rajeshKumar@gmail.com',psswd:'rajesh'});
fs.writeFileSync("./data.txt",JSON.stringify(data));


