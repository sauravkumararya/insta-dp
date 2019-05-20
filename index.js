
const ipp = require('instagram-profile-picture');

var https = require('https');


https.createServer(function (req, res) {/*
  console.log(req.url);
  var u = req.url.replace(/[/]/g , '');
  console.log(u) 
ipp(u).then(user => {
 
  console.log(req.url);
  res.writeHead(200,{'Content-Type':'text/html'})
console.log(user);
res.write('<img src="'+user+'"/>')
res.end(); 

 

});
    
*/

res.write('hello')
res.end(); 
}).listen(3000);

