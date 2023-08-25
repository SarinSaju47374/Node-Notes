// //Challenge
// 1: Create a folder named "CRUD_like".at
// 2: Create a file in it named "bio.txt" and add few data in it.Create
// 3: Add more data into the file at the end of the existing data.Add
// 4: Read the data without getting Buffer data at FileSystemDirectoryEntry.apply
// 5: Rename the file name to "mybio.txt".
// 6. Delete both the file and the folder.

const fs = require("fs");

//1: CREATE

try{
    fs.mkdirSync("./CRUD_like");
    console.log("The folder is successfully");
}catch(err){
    console.log(err);
}

//2:WRITE

fs.writeFileSync("./CRUD_like/bio.txt",
                    "This is a good Day");
//3:UPDATE

fs.appendFileSync("./CRUD_like/bio.txt",
                    "\nWhats so special about this fragrance of this Garden.");

//4:READ

let data = fs.readFileSync("./CRUD_like/bio.txt","utf-8");
console.log(data);
//5:RENAME

fs.renameSync("./CRUD_like/bio.txt","./CRUD_like/myBio.txt");

//6:DELETE file

try{
    fs.unlinkSync("./CRUD_like/myBio.txt");
    console.log("The file is delted Successfully");
}catch(err){
    console.log(err);
}

// DELETE FOLDER
try{
    fs.rmdirSync("./CRUD_like")
}catch(error){
    console.log(err);
}