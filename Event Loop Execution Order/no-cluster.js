const http = require("node:http");
const cluster = require("node:cluster")

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(`<h1>The Server is run by the process : - ${process.pid}</h1>`)
    }else {
        res.writeHead(400,{"Content-Type":"text/html"});
        res.end("<h1> Wrong url Buddy!</h1>")
    }
})

server.listen(3500,()=>{
    console.log("The server is running are port number 3500")
})

