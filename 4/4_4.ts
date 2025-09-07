// // 型引数
// type User<N> = {
//   name: N;
// };

// // ジェネリック関数
// function repeat<T>(element: T, length: number): T[] {
//   //入力の型によって出力を決めるのはあるある
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// }

// // 呼び出すたびに異なる型引数を与えることができる
// console.log(repeat<string>("a", 5));
// console.log(repeat<number>(123, 3));

// // function関数式
// const repeat2 = function <T>(element: T, length: number): T[] {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// };

// // アロー関数式
// const repeat3 = <T>(element: T, length: number): T[] => {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// };

// // メソッド記法
// const utils = {
//   repeat<T>(element: T, length: number): T[] {
//     const result: T[] = [];
//     for (let i = 0; i < length; i++) {
//       result.push(element);
//     }
//     return result;
//   },
// };

// // 型引数リストが複数の場合
// const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [
//   left,
//   right,
// ];
// const p = pair<string, number>("uhyo", 26);

// // extends(部分型制約)
// const repeat4 = <
//   T extends {
//     name: string;
//   }
// >(
//   element: T,
//   length: number
// ): T[] => {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// };

// type HasNameAndAge = {
//   name: string;
//   age: number;
// };

// console.log(
//   repeat4<HasNameAndAge>(
//     {
//       name: "uhyo",
//       age: 26,
//     },
//     3
//   )
// );

// // 関数の型引数は省略できる
// const result = repeat("a", 5); //Tの引数に"a"->resultはstring[]型に推論される
