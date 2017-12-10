var udp = require('udp');
var http = require('http');
var fs = require('fs');
var PORT = 3000;

var server = http.createServer(function (req, res) {
  console.log("== Resuest made");
  console.log("  - method:", req.method);
  console.log("  - path:", req.url);
  console.log("  - headers:", req.headers);
  console.log("");

var pth = '';
var mime = '';

if(req.url.length <= 1) {
mime = 'text/html';
pth = __dirname + '\\public\\index.html';
}else
if (req.url.indexOf('.html') != -1) {
mime = 'text/html';
pth = __dirname + '\\public\\index.html';
}else if (req.url.indexOf('.css') != -1) {
mime = 'text/css';
pth = __dirname + '\\public\\style.css';
}else if (req.url.indexOf('.js') != -1) {
mime = 'text/javascript';
pth = __dirname + '\\public\\index.js';
}else if (req.url.indexOf('.jpg') != -1) {
mime = 'image/jpg';
pth = __dirname + '\\public\\benny.jpg';
}else if (req.url.indexOf('.ico') != -1) {
mime = 'image/jpeg';
pth = __dirname + '\\public\\benny.jpg';
}
else {
  mime = 'text/html';
  pth = __dirname + '\\public\\404.html';
}


fs.readFile(pth, 'utf-8', function(err, data) {
 if (err) {
  mime = 'text/html';
  pth = __dirname + '\\public\\404.html';
   }

  res.writeHead(200, {'Content-Type': mime });
    res.write(data);
    res.end()
  });

});

server.listen(PORT, function () {
  console.log("== Server listening on port 3000");
});
