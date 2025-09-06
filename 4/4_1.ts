// <<<<<<< 20250906
// // function range(min: number, max: number): number[] {
// //   const result = [];
// //   for (let i = min; i <= max; i++) {
// //     result.push(i);
// //   }
// //   return result;
// // }

// // console.log(range(3, 6)); //[ 3, 4, 5, 6 ]

// // type Human = {
// //   height: number;
// //   weight: number;
// // };

// // // const calcBMI = function (human: Human): number {
// // //   return human.weight / human.height ** 2;
// // // };

// // // // 分割代入もできる
// // // const calcBMI = function ({ height, weight }: Human): number {
// // //   return weight / height ** 2;
// // // };

// // // // アロー関数式
// // // // "function"の宣言がいらない
// // // const calcBMI = ({ height, weight }: Human): number => {
// // //   return weight / height ** 2;
// // // };

// // // アロー関数の省略形
// // const calcBMI = ({ height, weight }: Human): number => weight / height ** 2;

// // // エラーとなる書き方
// // type ReturnObj = {
// //   bmi: number;
// // };
// // // // アロー関数のreturnとみなされているから
// // // const calcBMIObject2 = ({ height, weight }: Human): ReturnObj => {
// // //   bmi: weight / height ** 2;
// // // };

// // // 関数式
// // const uhyo: Human = {
// //   height: 1.84,
// //   weight: 72,
// // };

// // console.log(calcBMI(uhyo)); // 21.266540642722116

// // const obj = {
// //   // メソッド記法
// //   double(num: number): number {
// //     return num * 2;
// //   },
// //   // 通常の記法 + アロー関数
// //   double2: (num: number): number => num * 2,
// // };

// // console.log(obj.double(100)); //200
// // console.log(obj.double2(-50)); //-100

// // // 可変長引数
// // const sum = (...args: number[]): number => {
// //   let result = 0;
// //   for (const num of args) {
// //     result += num;
// //   }
// //   return result;
// // };

// // console.log(sum(1, 10, 100)); // 211
// // console.log(sum(123, 456)); // 679
// // // console.log(sum()); // baseに引数が入らないのでエラー

// // // 関数呼び出しでのスプレッド構文

// // const nums = [1, 2, 3, 4, 5];
// // console.log(sum(...nums)); // 可変長引数と併用されることが多い

// // const numss: [number, number, number] = [1, 2, 3];
// // const sum3 = (a: number, b: number, c: number) => a + b + c;
// // console.log(sum3(...numss)); //numssがtuple型なのでエラーを吐かない

// // // // オプショナルな引数の宣言
// // // const toLowerOrUpper = (str: string, upper?: boolean): string => {
// // //   if (upper) {
// // //     return str.toUpperCase();
// // //   } else {
// // //     return str.toLowerCase();
// // //   }
// // // };

// // // デフォルト値の指定
// // const toLowerOrUpper = (str: string, upper: boolean = false): string => {
// //   if (upper) {
// //     return str.toUpperCase();
// //   } else {
// //     return str.toLowerCase();
// //   }
// // };

// // console.log(toLowerOrUpper("Hello")); //条件分岐時にundefinedはfalseに変換される
// // console.log(toLowerOrUpper("Hello", false));
// // console.log(toLowerOrUpper("Hello", true));

// // // コールバック関数
// // // // map
// // // type User = { name: string; age: number };
// // // const getName = (u: User): string => u.name;
// // // const users: User[] = [
// // //   { name: "uhyo", age: 26 },
// // //   { name: "John Smith", age: 15 },
// // // ];

// // // const names = users.map(getName); //usersの各要素にgetNameを適用した新しい配列を返す, userについて返り値の指定は必要ない。
// // // console.log(names);

// // // コールバック関数は、関数式に直接引数として与えることが多い
// // type User = { name: string; age: number };
// // const users: User[] = [
// //   { name: "uhyo", age: 26 },
// //   { name: "John Smith", age: 15 },
// // ];

// // const names = users.map((u: User): string => u.name); //アロー関数の省略形が使われてる
// // // const names = users.map((u: User): string => {return u.name}); //これと同じ意味
// // console.log(names);

// // // filter
// // const adultUsers = users.filter((u: User) => u.age >= 20);
// // // every
// // // 配列のすべての要素が条件を満たすならtrue
// // const allAdult = users.every((u: User) => u.age >= 20);
// // // some
// // // 配列のどれか1つでも要素を満たすならtrue
// // const seniorExist = users.some((u: User) => u.age >= 60);
// // // find
// // // 条件に当てはまった要素を返す
// // const john = users.find((u: User) => u.name.startsWith("John"));

// // console.log(john);
// =======
// function range(min: number, max: number): number[] {
//   const result = [];
//   for (let i = min; i <= max; i++) {
//     result.push(i);
//   }
//   return result;
// }

// console.log(range(3, 6)); //[ 3, 4, 5, 6 ]

// type Human = {
//   height: number;
//   weight: number;
// };

// // const calcBMI = function (human: Human): number {
// //   return human.weight / human.height ** 2;
// // };

// // // 分割代入もできる
// // const calcBMI = function ({ height, weight }: Human): number {
// //   return weight / height ** 2;
// // };

// // // アロー関数式
// // // "function"の宣言がいらない
// // const calcBMI = ({ height, weight }: Human): number => {
// //   return weight / height ** 2;
// // };

// // アロー関数の省略形
// const calcBMI = ({ height, weight }: Human): number => weight / height ** 2;

// // エラーとなる書き方
// type ReturnObj = {
//   bmi: number;
// };
// // アロー関数のreturnとみなされているから
// const calcBMIObject2 = ({ height, weight }: Human): ReturnObj => {
//   bmi: weight / height ** 2;
// };

// // 関数式
// const uhyo: Human = {
//   height: 1.84,
//   weight: 72,
// };

// console.log(calcBMI(uhyo)); // 21.266540642722116
// >>>>>>> main
