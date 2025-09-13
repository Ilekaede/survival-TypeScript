import { error } from "console";
import { readFile } from "fs/promises";
import { resolve } from "path";

const p = readFile("foo.txt", "utf8");

p.then((data) => {
  console.log(data);
});

p.then((result) => {
  console.log("1");
});
p.then((result) => {
  console.log("2");
});
p.then((result) => {
  console.log("3");
});

p.catch((error) => {
  console.log("失敗", error);
});

// 同時の登録も可能
p.then(
  (result) => {
    console.log("成功", result);
  },
  (error: unknown) => {
    // errorの受け取りにはunknownの型注釈をつけるのがおすすめ
    console.log("失敗"), error;
  }
);

// 非同期処理の成功失敗にかかわらず呼ばれる
p.finally(() => {
  console.log("終わった");
});

// 自分でもPromiseを返す関数は作れる
const pp = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(100);
  }, 3000);
});

pp.then((num) => {
  console.log(`結果は${num}`);
});

// Promiseの静的メソッド

const ppp = Promise.resolve(100);

ppp.then((result) => {
  console.log(`result is ${result}`);
});
