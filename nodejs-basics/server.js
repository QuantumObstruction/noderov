var http = require('http');

var server = http.createServer(function (req, res) {
  console.log("== Resuest made");
  console.log("  - method:", req.method);
  console.log("  - path:", req.url);
  console.log("  - headers:", req.headers);
  console.log("");

  // res.statusCode = 200;
  // res.write("Hello world!");
  // res.setHeader("Content-Type", "text/html");
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.write("<html>");
  res.write("<body>");
  res.write("<h1>Welcome to this site!</h1>");
  res.write("<p>You requested " + req.url + "</p>");
  res.write("</body>");
  res.write("</html>");
  res.end();

});

server.listen(8000, function () {
  console.log("== Server listening on port 8000");
});
