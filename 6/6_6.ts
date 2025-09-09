// // any型

// // any型の引数に対してなんでもできちゃう
// function doWhatEver(obj: any) {
//   console.log(obj.user.name);
//   obj();
//   const result = obj * 10;
//   return result;
// }

// // unknown型
// function doNothing(val: unknown) {
//   console.log(val);
//   //   const name = val.name // TypeScriptがプロパティアクセスを制限
// }

// doNothing(3);
// doNothing({
//   user: {
//     name: "uhyo",
//   },
// });

// doNothing(() => {
//   console.log("hi");
// });

// // 可変長タプル型
// type NumberAndStrings = [number, ...string[]];
// const arr1: NumberAndStrings = [25, "u", "j"];
// const arr2: NumberAndStrings = [25];

// // 組み込みの型
// // Readonly
// type R = Readonly<{
//   name: string;
//   age: number;
// }>;

// // Partial
// // 全部オプショナルになる
// type P = Partial<{
//   name: string;
//   age: number;
// }>;

// // Pick
// // オブジェクト型のうち、第2引数で指定した名前のプロパティのみ残したオブジェクト型
// // 複数残すときは"name"|"age"とすればいい
// type T = Pick<
//   {
//     name: string;
//     age: number;
//   },
//   "age"
// >;

// //Omit
// // 第2引数で指定した名前のプロパティを除外したオブジェクト型
// type O = Omit<
//   {
//     name: string;
//     age: number;
//   },
//   "age"
// >;

// // Extract
// // オブジェクトの構成要素のうち部分型ダル者のみを抜き出した新しいユニオン型の作成
// type Union = "u" | "j" | 123 | 456 | false;
// type E = Extract<Union, string>;
