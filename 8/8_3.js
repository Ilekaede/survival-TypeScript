"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("fs/promises");
var p = (0, promises_1.readFile)("foo.txt", "utf8");
p.then(function (data) {
    console.log(data);
});
p.then(function (result) {
    console.log("1");
});
p.then(function (result) {
    console.log("2");
});
p.then(function (result) {
    console.log("3");
});
p.catch(function (error) {
    console.log("失敗", error);
});
// 同時の登録も可能
p.then(function (result) {
    console.log("成功", result);
}, function (error) {
    // errorの受け取りにはunknownの型注釈をつけるのがおすすめ
    console.log("失敗"), error;
});
// 非同期処理の成功失敗にかかわらず呼ばれる
p.finally(function () {
    console.log("終わった");
});
// 自分でもPromiseを返す関数は作れる
var pp = new Promise(function (resolve) {
    setTimeout(function () {
        resolve(100);
    }, 3000);
});
pp.then(function (num) {
    console.log("\u7D50\u679C\u306F".concat(num));
});
