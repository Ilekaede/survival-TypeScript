// // リテラル型
// type FooString = "foo"; // FooString型には文字列"foo"しか入らない、という意味

// const foo: FooString = "foo";

// // const bar:FooString = "bar" // fooでないのでエラー

// // テンプレートリテラルを効かせる
// function makeKey<T extends string>(userName: T) {
//   return `user:${userName}` as const;
// }

// // makeKeyの返り値の型は推論される
// const uhyoKey: "user:uhyo" = makeKey("uhyo");

// // ユニオン型とリテラル型の組み合わせ
// function signNumber(type: "plus" | "minus") {
//   return type === "plus" ? 1 : -1;
// }

// console.log(signNumber("plus"));
// console.log(signNumber("minus"));

// // widening
// const uhyo1 = "uhyo"; //"uhyo"型
// let uhyo2 = "uhyo"; // string型になる。letの場合、変数の型がリテラル型に推論されそうな場合はプリミティブ型に変換する

// // リテラル型のwideningがオブジェクトリテラルの中で発生するとき
// // オブジェクトリテラルの型が推論されるとき、各プロパティの型がリテラル型となる場合はwideningされる
// const uhyo = {
//   name: "uhyo",
//   age: 26,
// };
