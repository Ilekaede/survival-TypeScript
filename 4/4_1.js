// function range(min, max) {
//     var result = [];
//     for (var i = min; i <= max; i++) {
//         result.push(i);
//     }
//     return result;
// }
// console.log(range(3, 6)); //[ 3, 4, 5, 6 ]
// // const calcBMI = function (human: Human): number {
// //   return human.weight / human.height ** 2;
// // };
// // // 分割代入もできる
// // const calcBMI = function ({ height, weight }: Human): number {
// //   return weight / height ** 2;
// // };
// <<<<<<< 20250906
// // // アロー関数式
// // // "function"の宣言がいらない
// // const calcBMI = ({ height, weight }: Human): number => {
// //   return weight / height ** 2;
// // };
// // アロー関数の省略形
// =======
// // アロー関数式
// >>>>>>> main
// var calcBMI = function (_a) {
//     var height = _a.height, weight = _a.weight;
//     return weight / Math.pow(height, 2);
// };
// <<<<<<< 20250906
// // // アロー関数のreturnとみなされているから
// // const calcBMIObject2 = ({ height, weight }: Human): ReturnObj => {
// //   bmi: weight / height ** 2;
// // };
// =======
// >>>>>>> main
// // 関数式
// var uhyo = {
//     height: 1.84,
//     weight: 72,
// };
// console.log(calcBMI(uhyo)); // 21.266540642722116
// <<<<<<< 20250906
// var obj = {
//     // メソッド記法
//     double: function (num) {
//         return num * 2;
//     },
//     // 通常の記法 + アロー関数
//     double2: function (num) { return num * 2; },
// };
// console.log(obj.double(100)); //200
// console.log(obj.double2(-50)); //-100
// // 可変長引数
// var sum = function () {
//     var args = [];
//     for (var _i = 0; _i < arguments.length; _i++) {
//         args[_i] = arguments[_i];
//     }
//     var result = 0;
//     for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
//         var num = args_1[_a];
//         result += num;
//     }
//     return result;
// };
// console.log(sum(1, 10, 100)); // 211
// console.log(sum(123, 456)); // 679
// // console.log(sum()); // baseに引数が入らないのでエラー
// // 関数呼び出しでのスプレッド構文
// var nums = [1, 2, 3, 4, 5];
// console.log(sum.apply(void 0, nums)); // 可変長引数と併用されることが多い
// var numss = [1, 2, 3];
// var sum3 = function (a, b, c) { return a + b + c; };
// console.log(sum3.apply(void 0, numss)); //numssがtuple型なのでエラーを吐かない
// // // オプショナルな引数の宣言
// // const toLowerOrUpper = (str: string, upper?: boolean): string => {
// //   if (upper) {
// //     return str.toUpperCase();
// //   } else {
// //     return str.toLowerCase();
// //   }
// // };
// // デフォルト値の指定
// var toLowerOrUpper = function (str, upper) {
//     if (upper === void 0) { upper = false; }
//     if (upper) {
//         return str.toUpperCase();
//     }
//     else {
//         return str.toLowerCase();
//     }
// };
// console.log(toLowerOrUpper("Hello")); //条件分岐時にundefinedはfalseに変換される
// console.log(toLowerOrUpper("Hello", false));
// console.log(toLowerOrUpper("Hello", true));
// var users = [
//     { name: "uhyo", age: 26 },
//     { name: "John Smith", age: 15 },
// ];
// var names = users.map(function (u) { return u.name; }); //アロー関数の省略形が使われてる
// // const names = users.map((u: User): string => {return u.name}); //これと同じ意味
// console.log(names);
// // filter
// var adultUsers = users.filter(function (u) { return u.age >= 20; });
// // every
// // 配列のすべての要素が条件を満たすならtrue
// var allAdult = users.every(function (u) { return u.age >= 20; });
// // some
// // 配列のどれか1つでも要素を満たすならtrue
// var seniorExist = users.some(function (u) { return u.age >= 60; });
// // find
// // 条件に当てはまった要素を返す
// var john = users.find(function (u) { return u.name.startsWith("John"); });
// console.log(john);
// =======
// >>>>>>> main
