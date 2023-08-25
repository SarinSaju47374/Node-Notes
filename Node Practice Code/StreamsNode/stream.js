/* 
Def: Streams are objects that let you read data from a source or write a data to a 
destination in continous fashion. 

4 types of Stream:-
Readable :- Stream which is used to read operation 
Writable :- Stream which is used for write operation
Duplex :- Stream which can be used for both read and write operation.
Transform :- A type of duplex stream where the output is computed based on input

Event type of Stream is an EventEmitter instance and throws several events at different 
instances of time . For example , some of the commonly used events are:-

data:- Fired when data is available to read.
end:- Fired when no more data to read
error:- Fired when theres any error on recieve or writing data.
finish:- Fired when all the data has been flushed to underlying system.

*/
let http = require("http");
let fs = require("fs");
const hostname="127.0.0.1";
const port=2700;
let server = http.createServer();

server.on("request",(req,res)=>{
    const rstream = fs.createReadStream("../content/first.txt");//readable stream
    console.log(rstream);
    rstream.on("data",(chunks)=>{
        res.write(chunks); //writeable Stream
    })
    rstream.on("end",()=>{
        res.end();
    })
    rstream.on("error",()=>{
        console.log("The File you are trying to read doesnt Exist Amigo")
    })
    rstream.on("finish",()=>{
        console.log("Data is Flushed.")
    })
})

server.listen(port,hostname,()=>{
    console.log(`Server is listening at http://${hostname}:${port}`)
})
server.on("error",()=>{
    console.log("There is an error in the server");
})