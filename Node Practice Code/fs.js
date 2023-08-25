
//Synchrounous Approach to read and write files

const {readFileSync,writeFileSync, readFile, writeFile,appendFileSync,renameSync} = require("fs");

// /*
const firstTxt = readFileSync("./content/first.txt","utf-8");

//What happens if we dont mention the encoding as below
const secondTxt = readFileSync("./content/subfolder/normal.txt");
// We will get Buffer data which is a datatype in node Js which is not in JS
/*
 Node.js includes an additional data type called buffer
 ( Not aviailable in browsers Javascript );
 Buffer is mainly used to store binary data.
 while reading from a file or recieving packets over the network.
*/
console.log(secondTxt);//<Buffer 49 6e 66 6f 20 31 0d 0a>


//Ovewrite the whole file
writeFileSync("./content/second.txt","THis is amazing")
//Append the data to the file
writeFileSync("./content/second.txt","THis is Spectacular",{flag:'a'})

//Append the data the right way
appendFileSync("./content/second.txt","\nI am the sentence being appended")

//Rename a file
renameSync("./content/second.txt","./content/secondNew.txt");
// */

//Asynchronous approach to read and write files

/*
const {readFile,writeFile} = require("fs");
console.log("The process has started");
readFile("./content/first.txt","utf-8",
           (err,res)=>{
            if(err){
                console.log(err);
                return;
            }
            let first = res;
            readFile("./content/second.txt","utf-8",
                      (err,res)=>{
                        if(err){
                            console.log(err);
                            return;
                        }
                        let second = res;
                        writeFile("./content/subFolder/result.txt",
                        `Hello following is the info i got:-
                        ${first}
                        ${second}
                        `,(err)=>{
                            if(err){
                                console.log(err);
                            }
                            console.log("Done with the task")
                        }
                        )
                      }
            )
           } 
)
console.log("The next process is about to start")
*/

