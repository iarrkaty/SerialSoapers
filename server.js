const http = require('http');

const hostname = "127.0.0.1"
const port = 8080;

const server = createServer ((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('App is running on port', port);
});
