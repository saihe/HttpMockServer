const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log("リクエスト受取");
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        res.end();
    }else{
        const uri = url.parse(req.url).pathname;
        console.log("リクエストURL：" + uri);
        res.setHeader('Access-Controll-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        getContent(uri, (err, file) => {
            res.write(file);
            res.end();
        })
    }
    console.log("リクエスト返却");
}).listen(8081, 'localhost');

function getContent(uri, func) {
    fs.readFile("." + uri, 'UTF-8', func);
}