// //Challenge
// 1: Create a folder named "CRUD_like".at
// 2: Create a file in it named "bio.txt" and add few data in it.Create
// 3: Add more data into the file at the end of the existing data.Add
// 4: Read the data without getting Buffer data at FileSystemDirectoryEntry.apply
// 5: Rename the file name to "mybio.txt".
// 6. Delete both the file and the folder.

const fs = require("fs");

//1: CREATE


fs.mkdir("./CRUD_like",(err)=>{
    if(err) throw err;
    console.log("The folder is successfully created");
});

//2:WRITE

fs.writeFile("./CRUD_like/bio.txt","This is a good Day",(err)=>{
    if(err) throw err;
    console.log("File is edited!")
});

//3:UPDATE

fs.appendFile("./CRUD_like/bio.txt",
            "\nWhats so special about this fragrance of this Garden.",(err)=>{
                if(err) throw err;
                console.log("File's been updated.")
            });

//4:READ

fs.readFile("./CRUD_like/bio.txt","utf-8",(err,res)=>{
    if(err) throw err;
    let data = res;
    console.log(data); 
});

//5:RENAME

fs.rename("./CRUD_like/bio.txt","./CRUD_like/myBio.txt",(err)=>{
    if(err) throw err;
    console.log("The File is renamed");
});

//6:DELETE file


fs.unlink("./CRUD_like/myBio.txt",(err)=>{
    if(err) throw err;
    console.log("The file is deleted");
});


// DELETE FOLDER

fs.rmdir("./CRUD_like",(err)=>{
    if(err) throw err;
    console.log("The folder is Deleted")
})
