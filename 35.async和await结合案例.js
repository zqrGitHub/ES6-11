const fs = require("fs");

// 读取第一个文件
function readWeiXue(){
  return new Promise((resovle,reject)=>{
    fs.readFile("./resouse/为学.md",(err,data)=>{
      if(err) reject(err);
      resovle(data);
    })
  })
}
function readChayangshi(){
  return new Promise((resovle,reject)=>{
    fs.readFile("./resouse/插秧诗.md",(err,data)=>{
      if(err) reject(err);
      resovle(data);
    })
  })
}
function readguanshuyougan(){
  return new Promise((resovle,reject)=>{
    fs.readFile("./resouse/观书有感.md",(err,data)=>{
      if(err) reject(err);
      resovle(data);
    })
  })
}

async function main(){
  let weixue = await readWeiXue();
  let chayang = await readChayangshi();
  let guanshuyougan = await readguanshuyougan();
  console.log(weixue.toString());
  console.log(chayang.toString());
  console.log(guanshuyougan.toString());
}

main();
