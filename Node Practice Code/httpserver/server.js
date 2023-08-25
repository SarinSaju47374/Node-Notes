// const http = require('http');

// const hostname = '192.168.43.38'; // Replace with your server's IP address or hostname
// const port = 3000; // Replace with the port you want to listen on

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<html><body><h1>pODA!</h1></body></html>');
  
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// // const hostname = '2401:4900:6147:df4c:11f:95e7:d95a:73b0';

// The http.createServer() method includes request and response params which is supplied by- 
//Node.js

//The request object can be used to get info about the current HTTP request

const http = require("http");
const port = 3000;
const hostname = "127.0.0.1"
const server = http.createServer((req,res)=>{
  console.log(req.url);
  if(req.url=="/"){
    res.end("This is Home page amigos"); //if something is requested this will respond
  }else if(req.url=="/contacts"){
    res.end("My contact number is +91-7568052455"); //if something is requested this will respond
  }else if(req.url=="/about"){
    res.end("This is a unknown Orgrnainsation amigos. So Look for yourself")
    //OR
    // res.write("This is a unknown Orgrnainsation amigos. So Look for yourself")
    // res.end()
  }else{
    res.writeHead(404,{"Content-type":"text/html"})
    res.end("<h1>404 NOT FOUND AMIGO</h1>")
  }
});


server.listen(port,hostname,()=>{
  console.log(`Server running at http://${hostname}:${port}/`);
})