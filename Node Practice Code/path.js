let path  = require("path");


// ****Note:- Use Forward Slash instead of Backward Slash

//Current Dirname
console.log(path.dirname("./content/first.txt"));

//Extension name
console.log(path.extname("./content/first.txt"));

//Base name(Filename)
console.log(path.basename("./content/first.txt"));

//Parse the whole above data in one object
console.log(path.parse("./content/first.txt"));

//Concateniting paths

let filePath = path.join(__dirname,"/content","subFolder","normal.txt");
console.log(filePath);

//Resolving Paths

let newFilepath = path.resolve(__dirname,"/content","subFolder","..","first.txt");
console.log(newFilepath);

//Absolute Dirname

console.log(__dirname);




