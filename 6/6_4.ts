// // lookup型
// type Human = {
//   type: "human";
//   name: string;
//   age: number;
// };

// function setAge(human: Human, age: Human["age"]) {
//   return {
//     ...human,
//     age, //後書きでhumanのageに新しい値を上書きしたオブジェクトを作成
//   };
// }

// const uhyo: Human = {
//   type: "human",
//   name: "uhyo",
//   age: 26,
// };

// const uhyo2 = setAge(uhyo, 27);
// console.log(uhyo2);

// // keyof型
// type HumanKeys = keyof Human; // 型から別の型を作る

// let key: HumanKeys = "name";
// key = "age";
// console.log(key);

// const mmConversionTable = {
//   mm: 1,
//   cm: 10,
//   m: 1e3,
//   km: 1e6,
// };

// // mmConversionTable型の値をkeyofで定義している
// // 新しくtypeで定義する必要がないから楽そう
// // 値から定義する、が熱いんすわ
// function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
//   const mmValue = value * mmConversionTable[unit];
//   return {
//     mm: mmValue,
//     m: mmValue / 1e3,
//     km: mmValue / 1e6,
//   };
// }

// console.log(convertUnits(5600, "cm"));

// // ジェネリクスとの関係
// // https://qiita.com/toproad/items/50243ef73ea2e77418b5 これがわかりやすいかも

// // getについて
// // getはオブジェクトと引数に受け取り、オブジェクト内のプロパティで、名前がkeyが一致しているプロパティの値を返す
// // 第一引数のobjはT型のオブジェクトである。T型は引数次第で決定する
// // 第二引数のkeyはK型のオブジェクトである。K型はTの型部分型であるため、例えばobjにHuman型が入ったならばその中のプロパティ名が型として受け付けられる。
// // 返り値の型はlookup型で、引数によってT[K]が定められる。
// function get<T, K extends keyof T>(obj: T, key: K): T[K] {
//   // extends: KはkeyofTの部分型でなければならない
//   return obj[key];
// }

// const uhyoName = get(uhyo, "name");
// const uhyoAge = get(uhyo, "age");
