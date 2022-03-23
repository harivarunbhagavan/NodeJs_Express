
// const http = require('http');
// const server = http.createServer((req,res) => {
//     if(req.url === '/'){
//     res.write('Hello from Node.js123');
//     res.end();
//     }
//     else{
//         res.write('File Not found');
//         res.end();
//     }
// });

// server.listen('3000');

const http = require('http');
const fs= require('fs');
http.createServer((req,res) => {
    const readStream = fs.createReadStream('./static/image.jpg');
    if(req.url === '/'){
        res.writeHead(200,{'content-type': 'image/jpg'});
        readStream.pipe(res);
    }
    else
    {
        res.write('File Not found');
        res.end();
    }
    
}).listen(3000);