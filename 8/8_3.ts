// // import { error } from "console";
// // import { readFile } from "fs/promises";
// // import { resolve } from "path";

// import { read } from "fs";
// import { readFile } from "fs/promises";

// // const p = readFile("foo.txt", "utf8");

// // p.then((data) => {
// //   console.log(data);
// // });

// // p.then((result) => {
// //   console.log("1");
// // });
// // p.then((result) => {
// //   console.log("2");
// // });
// // p.then((result) => {
// //   console.log("3");
// // });

// // p.catch((error) => {
// //   console.log("失敗", error);
// // });

// // // 同時の登録も可能
// // p.then(
// //   (result) => {
// //     console.log("成功", result);
// //   },
// //   (error: unknown) => {
// //     // errorの受け取りにはunknownの型注釈をつけるのがおすすめ
// //     console.log("失敗"), error;
// //   }
// // );

// // // 非同期処理の成功失敗にかかわらず呼ばれる
// // p.finally(() => {
// //   console.log("終わった");
// // });

// // // 自分でもPromiseを返す関数は作れる
// // const pp = new Promise<number>((resolve) => {
// //   setTimeout(() => {
// //     resolve(100);
// //   }, 3000);
// // });

// // pp.then((num) => {
// //   console.log(`結果は${num}`);
// // });

// // // Promiseの静的メソッド

// // // 与えられた引数を結果として即座に成功/失敗するPromiseオブジェクトを作るためのメソッド
// // const ppp = Promise.resolve(100);

// // ppp.then((result) => {
// //   console.log(`result is ${result}`);
// // });

// // // promise.all

// // const pAll = Promise.all([
// //   readFile("foo.txt", "utf8"),
// //   readFile("bar.txt", "utf8"),
// //   readFile("baz.txt", "utf8"),
// // ]);

// // p.then((result) => {
// //   const [foo, bar, baz] = result;
// //   console.log("foo.txt", foo);
// //   console.log("bar.txt", bar);
// //   console.log("baz.txt", baz);
// // });

// // // promise.race
// // // 非同期処理のうち最も早く終了したものの結果をプロミス全体の結果とする
// // const sleepReject = (duration: number) => {
// //   return new Promise<never>((resolve, reject) => {
// //     setTimeout(reject, duration);
// //   });
// // };

// // // ファイルの読み込みが５秒以内に終了しなかったらエラーを返す
// // const pppp = Promise.race([readFile("foo.txt", "utf8"), sleepReject(5000)]);

// // pppp.then(
// //   (result) => {
// //     console.log("成功", result);
// //   },
// //   (error: unknown) => {
// //     console.log("失敗", error);
// //   }
// // );

// // // Promiseチェーン
// // import { readFile } from "fs/promises";
// // import { resolve } from "path";

// // readFile("foo.txt", "utf8")
// //   .catch(() => "") // 失敗の場合は空文字を成功として変換する
// //   .then((result) => {
// //     console.log(result);
// //   });

// // const repeat10 = (str: string) =>
// //   new Promise<string>((resolve) => {
// //     setTimeout(() => resolve(str.repeat(10))), 1000;
// //   });

// // readFile("foo.txt", "utf8")
// //   .then((result) => repeat10(result))
// //   .then((result) => {
// //     console.log(result);
// //   });

// // dynamic import
// import("fs/promises")
//   .then(({ readFile }) => readFile("foo.txt", "utf8"))
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("エラーが発生しました", error);
//   });
