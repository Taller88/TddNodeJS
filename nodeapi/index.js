const fs = require('fs');



// 동기형식

const syncData = fs.readFileSync('./data.txt');
//syncData
//<Buffer 54 68 69 73 20 69 73 20 64 61 74 61 20 74 78 74 21>
//syncData.toString() 
//This is data txt!

console.log("sync toString "+syncData.toString());

const syncDataUtf = fs.readFileSync('./data.txt', 'utf8');
console.log("sync: "+syncDataUtf);


// 비동기 

const data = fs.readFile('./data.txt','utf8',(err, data)=>{
    if(err){
        console.log("error")
        return;
    }

    console.log("success Callback");
    console.log("data: "+data);
})