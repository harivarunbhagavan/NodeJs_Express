// //File System Module 2 ------------------------------------+++++
// // With Folder
// //create folder

const fs = require('fs');
// fs.mkdir('tutorial', (err) => {
//     if(err)
//     console.log(err);
    
//     //remove folder -----------------------------------
//     //else
//     // fs.rmdir('tutorial',(err) => {
//     //     if(err)
//     //     console.log(err);
//     //     else
//     //     console.log('Successfully deleted folder');
//     // });
//     //added folder and adding a file --------------------
//     else{
//         fs.writeFile('./tutorial/example.txt',"Hello app1",(err) => {
//                 if(err)
//                 console.log(err);
//                 else
//                 console.log('created file');
//             });
//     }
// });

//delete file inside folder ------------------------
// fs.unlink('./tutorial/example.txt',(err) => {
//                     if(err)
//                     console.log(err);
//                     else{
//                     console.log('Deleted a file in it');
// }});

//delete folder ---------------------------------
fs.rmdir('./example',(err) => {
    if(err)
    console.log(err);
    else
    console.log('deleted folder');
});

// fs.readdir('example', (err,files) => {
//     if(err)
//     console.log(err);
//     else{
//         //deleting all files inside folder ----------------------
//         for(let file of files){
//             fs.unlink('./example/' + file, (err) => {
//                 if(err)
//                 console.log(err);
//                 else
//                 console.log('Success delete a files');
//             })
//         }
//     }
// });


