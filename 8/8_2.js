"use strict";
// import { createInterface } from "readline";
Object.defineProperty(exports, "__esModule", { value: true });
// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("文字列を入れて:", (line) => {
//   console.log(`${line}が入力されました`);
//   rl.close;
// });
// // 非同期な処理
// setTimeout(() => {
//   console.log("タイマー");
// }, 3000);
// console.log("タイマーセット");
var fs_1 = require("fs");
(0, fs_1.readFile)("foo.txt", "utf-8", function (err, result) {
    console.log(result);
});
console.log("読み込み開始");
