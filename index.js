const fs= require('fs');
const http= require('http');
////////////////////////////////////////////////////////////////////////////////

//Blocking synchronous  way 
//const textin = fs.readFileSync( './txt/input.txt','utf8');
//console.log(textin);

 //const textout= `This is what we know about the avocado:${textin}`;
 //fs.writeFileSync('./txt/output.txt',textout);
// console.log("file Written!");
  
 // Non-Blocking Asynchronous way.
//
/*fs.readFile('.txt/start.txt','utf-8', (err,data1)=>{
     if(err) return console.log('error');
    fs.writeFile(`.txt/${data1}.txt`,'utf-8', (err,data2)=>{
    console.log(data2);
    });
});
console.log("will read file!");
*///

///////////////////////////////////////////////////////////////////////////////////////////

//SERVER
 
const server=http.createServer((req,res)=>{
    console.log(req);
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('server has been started');
})





















