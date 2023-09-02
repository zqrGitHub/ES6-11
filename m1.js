// // 分别暴露
// export let school = "尚硅谷";
// export function touch(){
//   console.log('交给你开发技能');
// }

// 统一暴露
// let a = "zz";
// function findJob(){
//   console.log('找工作');
// }
// export {a,findJob}

// // 默认暴露
// // 这种方式调用的时候要多加一层 m1.default.b
export default{
  b:'pp',
  change(){
    console.log('改变');
  }
}