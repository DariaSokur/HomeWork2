var http = require('http');
var app = http.createServer(function (req, res) {
    if (req.url === '/about') {
        console.log(req);
        res.end();
    } else if (req.url === '/stop') {
        app.close();
        res.write('<h1>This server was stopped</h1>')
        res.end();
    } else {
        res.write('<h1>Hello, World!</h1>');
    }
});
app.listen(3000);
console.log('Go to localhost 3000');