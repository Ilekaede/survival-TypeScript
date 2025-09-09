// // //
// // type Animal = {
// //   species: string;
// //   age: number;
// // };
// // // インターセクション型
// // type Human = Animal & {
// //   name: string;
// // };

// // const tama: Animal = {
// //   species: "Felis silvestris catus",
// //   age: 5,
// // };

// // // プロパティの数が増えてる
// // const uhyo: Human = {
// //   species: "Homo sapiens sapiens",
// //   age: 26,
// //   name: "uhyo",
// // };

// // type StringAndNumber = string & number; // 実現不可能なのでnever型

// // type Animal = {
// //   species: string;
// // };
// // type Human = {
// //   name: string;
// // };

// // function getName(human: Human) {
// //   return human.name;
// // }

// // function getSpecies(animal: Animal) {
// //   return animal.species;
// // }

// // const uhyo: Human = {
// //   name: "uhyo",
// // };

// // const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies; //ユニオン型を取る

// // // mysteryFunc(uhyo) // Animalのときに対応できないのでエラー吐く

// // // インターセクション型を定義することで回避
// // const tama: Animal & Human = {
// //   species: "cat",
// //   name: "tama",
// // };

// // mysteryFunc(tama);

// // オプショナルプロパティ再訪

// type Human = {
//   name: string;
//   age?: number; // number | undefined
// };

// const uhyo: Human = {
//   name: "uhyo",
//   age: 25,
// };

// const john: Human = {
//   name: "John Smith",
//   age: undefined, // これもできる
// };

// // オプショナルチェイニング
// function useMaybeHuman(human: Human | undefined) {
//   const age = human?.age; //number | undefined 型
//   console.log(age);
// }

// type GetTimeFunc = () => Date;

// // オプショナルチェイン
// // obj?.foo["bar"]().baz().hoge
// function useTime(getTimeFunc: GetTimeFunc | undefined) {
//   const timeOrUndefined = getTimeFunc?.().toString(); //？.はundefinedが入ったら()以降の処理をすべてスキップできる
// }

// type User = {
//   isAdult(): boolean;
// };

// function checkForAdultUser(u: User | undefined) {
//   if (u?.isAdult()) {
//     // ユーザが存在かつisAdult()を満たす
//     console.log("yes");
//   }
// }
