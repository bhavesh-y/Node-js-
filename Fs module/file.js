const fs = require("fs");

// Sync..
// fs.writeFileSync('./test.txt','Hey Where');


// Async..
// fs.writeFile('./test.txt','Hey Phere', (err)=>{});







// Sync..
// const result = fs.readFileSync('./contact.txt',"utf-8")
// console.log(result)



// Async..
// fs.readFile('./contact.txt','utf-8',(err,result)=>{
//     if (err){
//         console.log("Error : ",err)
//     } else{
//         console.log(result)
//     }
// })



// fs.appendFileSync('./test.txt',new Date().getDate().toLocaleString());
// fs.appendFileSync('./test.txt',"hey There \n");


// fs.copyFileSync('./contact.txt','./copy.txt')


// fs.unlinkSync("./copy.txt")

console.log(fs.statSync('./test.txt'));



fs.mkdirSync('my-docs/a/b',{recursive : true})