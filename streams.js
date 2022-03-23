//readable and writable streams ---------------------------

// const fs = require('fs');
// const readStream = fs.createReadStream('./one.js','utf-8');
// const writeStream = fs.createWriteStream('example2.txt');

// readStream.on('data',(chunk) => {
//     //console.log(chunk);
//     writeStream.write(chunk);
// });

//pipes and pipe chaining-------------------

const fs = require('fs');
const zlib = require('zlib');
//compress data with zipping
//const gzip = zlib.createGzip(); 
//uncompress data 
const gunzip = zlib.createGunzip(); 
const readStream = fs.createReadStream('./example2.txt.gz',);
const writeStream = fs.createWriteStream('uncompress.txt');
readStream.pipe(gunzip).pipe(writeStream);
