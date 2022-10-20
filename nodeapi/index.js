const http = require('http');
const math =require('./math');


const result = math.sum(1,3);

console.log(result);

http.createServer();