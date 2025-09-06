// // 関数の部分型関係

// // 返り値の型により部分型が発生するパターン
// type HasName = {
//   name: string;
// };
// type HasNameAndAge = {
//   name: string;
//   age: number;
// };

// const fromAge = (age: number): HasNameAndAge => ({
//   name: "John Smith",
//   age,
// });

// const f: (age: number) => HasName = fromAge; // HasName型のobjに対し、HasNameAndAgeを返すfromAgeを代入できてる
// const obj: HasName = f(100); //objにはHasNameAndAge型のオブジェクトが入る

// // 引数の型による部分型関係
// const showName = (obj: HasName) => {
//   console.log(obj.name);
// };

// // showNameとg、同じ実行結果として必要な条件を考えた時、showNameのほうが必要な引数が少なくて条件良くね？すなわちshowNameはgに対する上位互換だから部分型じゃね？という考え方。なのでオブジェクトのときと逆になる。
// const g: (obj: HasNameAndAge) => void = showName; // showNameはgに対する部分型

// g({
//   name: "uhyo",
//   age: 26,
// });

// // ex
// type UnaryFunc = (arg: number) => number;
// type BinaryFunc = (left: number, right: number) => number;

// const double: UnaryFunc = (arg) => arg * 2;
// const add: BinaryFunc = (left, right) => left + right;

// const bin: BinaryFunc = double; // UnaryFuncがBinaryFuncの部分型
// console.log(bin(10, 100));
