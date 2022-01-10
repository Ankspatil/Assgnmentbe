 
var http = require("http");
var dt = require("./blogging");
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type': 'text/html'});
   res.write("the class info is " + dt.myclass());
   res.end();
}) 
server.listen(80 ,"127.0.0.1",()=>{
    console.log("listeing to port no 80")
});



