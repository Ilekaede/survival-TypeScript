// // // async関数の返り値は必ずPromiseになる
// // async function get3() {
// //   console.log("get3が呼び出された");
// //   return 3;
// // }

// // console.log("get3を呼び出すよ");
// // const p = get3();
// // p.then((num) => {
// //   console.log(`num is ${num}`); // 非同期処理なので一番最後
// // });
// // console.log("get3を呼び出した");

// // 以下の順番で出力
// // get3を呼び出すよ
// // get3が呼び出された
// // get3を呼び出した
// // num is 3

// // // await式

// // const sleep = (duration: number) => {
// //   return new Promise<void>((resolve) => {
// //     setTimeout(resolve, duration);
// //   });
// // };

// // async function get4() {
// //   await sleep(1000); // 与えられたPromiseの結果が出るまで待つ
// //   return 4;
// // }

// // const p4 = get4();

// // p4.then((num) => {
// //   console.log(`num is ${num}`);
// // });

// // async function get3() {
// //   console.log("get3が呼び出された");
// //   await sleep(1000);
// //   console.log("awaitの次に進んだ");
// //   return 3;
// // }

// // console.log("get3を呼び出すよ");
// // const p = get3();
// // p.then((num) => {
// //   console.log(`num is ${num}`); // 非同期処理なので一番最後
// // });
// // console.log("get3を呼び出した");

// // awaitの返り値
// const sleep = (duration: number) => {
//   return new Promise<void>((resolve) => {
//     setTimeout(resolve, duration);
//   });
// };

// async function get3() {
//   await sleep(1000);
//   return 3;
// }

// async function main() {
//   const p = await get3();
//   const q = await get3();
//   const r = await get3();
//   return p + q + r;
// }

// main().then((result) => {
//   console.log(`result is ${result}`);
// });
