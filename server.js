#!/usr/local/bin/node

console.log(`usage: ./sss.js [your/path/to/serve] [port]`);

var path = process.argv[2] || __dirname;
var port = process.argv[3] || 5000;

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(path)).listen(port, function(){
    console.log(`Server ${path} running on ${port}...`);
});