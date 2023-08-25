/*
--> The pipe() method in Node.js is a useful feature that allows you to 
    transfer data between multiple streams in an efficient and convenient
    way. With pipe(), you can connect the output of one stream to the input
    of another stream, creating a pipeline for data to flow through.

-> This approach is more efficient than reading all the data from the source 
   stream into memory and then writing it to the destination stream. Instead, 
   pipe() reads data from the source stream in small chunks and writes them to 
   the destination stream immediately, without buffering the entire data in memory. 
   This helps to minimize memory usage and reduce the risk of out-of-memory errors.

-> **Moreover, pipe() is also beneficial for handling backpressure. When the destination 
   stream is slower than the source stream, the pipe() method automatically slows down 
   the source stream to prevent the destination stream from being overwhelmed with data. 
   It pauses the source stream until the destination stream can handle more data, and then 
   resumes the source stream when the destination stream is ready to receive more data.

-> Overall, pipe() simplifies the process of transferring data between multiple streams, 
   reduces memory usage, and handles backpressure effectively.
*/


/* 
`pipe()` is a method that is used to transfer data from a readable stream to a writable
stream. It connects the output of one stream to the input of another stream.
*/

let http = require("http");
let fs = require("fs");
const hostname="127.0.0.1";
const port=2700;
let server = http.createServer();

server.on("request",(req,res)=>{
    const rstream = fs.createReadStream("../content/first.txt");  //readable stream
    rstream.pipe(res)   //  piping readable stream to writeable stream
    //or
    // const wstream = fs.createWriteStream("../content/streamOutput.txt");
    // rstream.pipe(wstream);
})

server.listen(port,hostname,()=>{
    console.log(`Server is listening at http://${hostname}:${port}`)
})
server.on("error",()=>{
    console.log("There is an error in the server");
})