
//File system module1 ------------------------------------
//create and reading deleting and renaming

const fs = require('fs');
//create a file ----------------------------------
// fs.writeFile('example.text',"this is an example", (err) => {
//     if(err)
//     console.log(err);
//     else{
//         console.log("File successfully created");
//         //read a File ------------------------------
//         fs.readFile('example.text','utf8', (err,file) => {
//             if(err)
//             console.log(err);
//             else{
//                 console.log(file);
//             }
//         });
//     }
    
// } );
//rename a file ----------------------------
// fs.rename('example.text','example2.txt', (err) => {
//     if(err)
//     console.log(err);
//     else
//         console.log('Success renmaed');

// });

//Add data ------------------------------------
// fs.appendFile('example2.txt', "\n Some data add", (err) => {
//     if(err)
//     console.log(err);
//     else
//     console.log('Suucess appended');
// });

// To delete a file -------------------------------
fs.unlink('example2.txt',(err) => {
    if(err)
    console.log(err);
    else
    console.log('Sucess deleted');
});


