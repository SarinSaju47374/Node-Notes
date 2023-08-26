const fs = require("node:fs");
const zlib =require("node:zlib")

const gzip = zlib.createGzip();


const readableStream = fs.createReadStream("./fileA.txt",{
    encoding:"utf-8",
    highWaterMark:3    //send chunks in 2 bytes
})

const writeableStream = fs.createWriteStream("./fileB.txt");


// readableStream.on("data",(chunk)=>{
    //     console.log(chunk);
    //     writeableStream.write(chunk) 
    // })
    
//Above code in a much simpler way using pipe    

readableStream.pipe(gzip).pipe(fs.WriteStream("./file.txt.gz"))
// readableStream.pipe(writeableStream);