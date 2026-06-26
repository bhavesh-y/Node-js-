const fs = require('fs');
const os = require('os');


console.log(os.cpus().length)

// Sync.. Blocking
// fs.writeFileSync('./test.txt','this is sync archi \n');
 
// Async.. Non Blocking 
// fs.writeFile('./test.txt','\nthis is Async.. Archi', (err)=>{})





// blocking 
// console.log("1")
// const read = fs.readFileSync('./contact.txt',"utf-8")
// console.log(read)
// console.log("2")

// Non Blocking
// console.log('1')
// fs.readFile('./contact.txt','utf-8',(err,result)=>{
//     console.log(result)
// })
// console.log('2')


// default Thread pool Size : 4
// 