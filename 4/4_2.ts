// type F = (repeatNum: number) => string;
// const xRepeat: F = (num: number): string => "x".repeat(num);

// // 型注釈は省略可能
// const xRepeat2 = (num: number) => "x".repeat(num); // xRepeat2は.repeat()がstringを返すことからstring型であると型推論されている
// // void型でも型注釈の省略可能
// const g = (num: number) => {
//   for (let i = 0; i < num; i++) {
//     console.log("Hello, World!");
//   }
// };

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr2 = nums.filter((x) => x % 3 === 0); //xの型注釈はnums.fileter()が(value:number) => unknown型と決まっているから逆推論が働く
// console.log(arr2);

// // 文脈上の型がオブジェクト型を伝播してくるパターン
// type Greetable = {
//   greet: (str: string) => string;
// };
// const obj: Greetable = {
//   greet: (str) => `Hello, ${str}`,
// };

// // コールシグネチャ
// type MyFunc = {
//   isUsed?: boolean;
//   (arg: number): void; // コールシグネチャ
// };

// const double: MyFunc = (arg: number) => {
//   console.log(arg * 2);
// };

// double.isUsed = true; // プロパティを持った関数として利用可能
// console.log(double.isUsed);
// double(500);
