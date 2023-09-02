// 引入fs模块
const fs = require("fs");

// 调用方法读取文件
fs.readFile('./resouse/为学.md',(err,data)=>{
  if(err) throw err;
  // 如果没有出错，输出内容
  console.log(data.toString());
});
// 使用Promise封装
const p = new Promise((resolve,reject)=>{
  fs.readFile('./resouse/为学.md',(err,data)=>{
    if(err) reject(err);
    resolve(data.toString());
  });
})

p.then((res)=>{
  console.log(res);
})
