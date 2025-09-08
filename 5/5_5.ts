function throwError() {
  const error = new Error("エラーが発生しました！");
  throw error;
}
// ↓エラー文の中身

// a_sakura@mba 5 % tsc 5_5.ts && node 5_5.js
// エラーを発生させる
// file:///Users/a_sakura/work-space/survival-TypeScript/5/5_5.js:5
//     var error = new Error("エラーが発生しました！");
//                 ^

// Error: エラーが発生しました！
//     at throwError (file:///Users/a_sakura/work-space/survival-TypeScript/5/5_5.js:5:17)
//     at file:///Users/a_sakura/work-space/survival-TypeScript/5/5_5.js:2:1
//     at ModuleJob.run (node:internal/modules/esm/module_job:274:25)
//     at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:644:26)
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:117:5)

// try-catch
try {
  console.log("エラーを発生させる");
  throwError();
  console.log("エラーを発生させた");
} catch (err) {
  console.log("エラーをキャッチした");
  console.log(err);
}
console.log("おわり");

// エラーを発生させる
// エラーをキャッチした
// Error: エラーが発生しました！
//     at throwError (file:///Users/a_sakura/work-space/survival-TypeScript/5/5_5.js:2:17)
//     at file:///Users/a_sakura/work-space/survival-TypeScript/5/5_5.js:20:5
//     at ModuleJob.run (node:internal/modules/esm/module_job:274:25)
//     at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:644:26)
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:117:5)
// おわり

// finally文
console.log(sum(100));
function sum(num: number): number {
  try {
    let result = 0;
    for (let i = 1; i <= num; i++) {
      result += i;
    }
    return result;
  } finally {
    console.log("finallyだよ");
  }
}
// finallyだよ
// 5050
