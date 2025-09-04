// type obj3_6 = {
//   foo3_6: number;
//   bar3_6: string;
// };

// const obj3_6_1: obj3_6 = {
//   foo3_6: 123,
//   bar3_6: "abc",
// };

// const { foo3_6, bar3_6 } = obj3_6_1;

// // プロパティ名と変数名を別にしたい場合
// // プロパティ名：変数名
// const { foo3_6: foo3_6_1, bar3_6: bar3_6_1 } = obj3_6_1;

// // ネストしたパターン
// const nested = {
//   num3_6: 123,
//   obj3_6_2: {
//     foo3_6_2: "Hello",
//     bar_3_6_2: "world!",
//   },
// };

// const {
//   num3_6,
//   obj3_6_2: { foo3_6_2 },
// } = nested;
// console.log(num3_6);
// console.log(foo3_6_2);

// // 配列の分割代入
// const arr3_6 = [1, 2, 4, 8, 16];
// const [first, second, third] = arr3_6;
// console.log(first);
// console.log(second);
// console.log(third);

// // 空白を用いて要素をスキップ
// const [, foo3_6_3, , , bar3_6_3] = arr3_6;
// console.log(foo3_6_3);
// console.log(bar3_6_3);

// //tuple型への適用
// const tuple3_6: [string, number] = ["uhyo", 123];
// const [name3_6, age3_6] = tuple3_6;
// console.log(name3_6);
// console.log(age3_6);

// // デフォルト値の指定
// type obj3_6_3 = { foo?: number };
// const obj3_6_4: obj3_6_3 = {};
// const obj3_6_5: obj3_6_3 = { foo: 123 };

// console.log(obj3_6_4.foo); // undefined
// // const foo = obj.foo !== undefined ? obj.foo : 500 と同じ
// const { foo = 500 } = obj3_6_4;
// console.log(foo);

// const { foo: bar = 500 } = obj3_6_5; // barに123が代入される
// console.log(bar);

// // ネストしたパターンに対するデフォルト値
// type NestedObj = {
//   obj?: {
//     foo: number;
//   };
// };

// const nested1: NestedObj = {
//   obj: { foo: 123 },
// };

// const nested2: NestedObj = {};

// const { obj: { foo: foo1 } = { foo: 500 } } = nested1;
// const { obj: { foo: foo2 } = { foo: 500 } } = nested2;

// // restパターン
// const obj = {
//   foo3: 123,
//   bar: "string",
//   baz: false,
// };

// const { foo3, ...restObj } = obj; // restでbarもbazも入ってる
// console.log(foo3); // 123
// console.log(restObj); // { bar: 'string', baz: false }

// const arr = [1, 2, 3, 4, 5, 6];
// const [first1, second2, third3, ...rest] = arr;

// console.log(rest); //[ 4, 5, 6 ]
