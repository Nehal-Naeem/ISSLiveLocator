const http = require('http');
const fs = require('fs');

const port = 3000;

// createserver callback can also be written as createServer(function(re, res) { implementation })
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('whereIssAtTho.html', (error, data) => {
        if (error) {
            res.writeHead(404);
            res.write('File Not Found')
        } else {
            res.write(data);
            res.end();
        }
    })
});

server.listen(port, (error) => {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port: ' + port);
    }
})
