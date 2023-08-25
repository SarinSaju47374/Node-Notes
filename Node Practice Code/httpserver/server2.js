const http = require("http");
const hostname = "127.0.0.1";
const port= 2003;
let server = http.createServer();

server.on("request",(req,res)=>{
    if(req.url=="/"){
        res.write("Hello This is another way to run a server!");
        res.end();
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 NOT FOUND</h1>")
    }
})
server.listen(port,hostname,()=>{
    console.log(`server is running at http://${hostname}:${port}`);
})
server.on("error", (error) => {
    console.error(`Server error: ${error}`);
  });