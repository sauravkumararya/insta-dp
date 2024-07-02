// using the http module
let http = require('http');
const ipp = require('instagram-profile-picture');
// look for PORT environment variable, 
// else look for CLI argument,
// else use hard coded value for port 8080
port = process.env.PORT || process.argv[2] || 8080;
 
// create a simple server
let server = http.createServer(function (req, res) {

 pass = '123';
 clientToken = '222';
 
        console.log(req.url);
  var u = req.url.replace(/[/]/g , '');
  console.log(u) 
ipp(u).then(user => {
 
  console.log(req.url);
  res.writeHead(200,{'Content-Type':'text/html'})
console.log(user);
res.write('<img src="'+user+'"/>')


res.write('Crafted By saurav', 'utf-8');
res.end();

});
    

 
 
    
 
    });
 
// listen on the port
server.listen(port, function () {
 
    console.log('app up on port: ' + port);
 
});
