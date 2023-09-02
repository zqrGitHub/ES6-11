// 引入fs模块
const fs = require("fs");

// fs.readFile("./resouse/为学.md", (err, data1) => {
//   fs.readFile("./resouse/插秧诗.md", (err, data2) => {
//     fs.readFile("./resouse/观书有感.md", (err, data3) => {
//       let result = data1 + data2 + data3;
//       console.log(result);
//     });
//   });
// });

// 使用promise实现
const p = new Promise((resolve,reject)=>{
  fs.readFile('./resouse/为学.md',(err,data)=>{
    resolve(data);
  })
})

p.then(res=>{
  return new Promise((resolve,reject)=>{
    fs.readFile('./resouse/观书有感.md',(err,data)=>{
      resolve([res,data]);
    })
  })
}).then(res=>{
  return new Promise((resolve,reject)=>{
    fs.readFile('./resouse/插秧诗.md',(err,data)=>{
      res.push(data);
      resolve(res);
    })
  })
}).then(res=>{
  console.log(res.join('\r\n'));
})
