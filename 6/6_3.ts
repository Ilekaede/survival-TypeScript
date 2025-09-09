// // 型の絞り込み(コントロールフロー解析)

// type SignType = "plus" | "minus";
// function signNumber(type: SignType) {
//   return type === "plus" ? 1 : -1;
// }

// function numberWithSign(num: number, type: SignType | "none") {
//   if (type === "none") {
//     return 0;
//   } else {
//     return num * signNumber(type); // ここでのtypeはSignType型のみとなる
//   }
// }

// // 条件演算子でもいける
// function numberWithSign2(num: number, type: SignType | "none") {
//   return type === "none" ? 0 : num * signNumber(type);
// }

// console.log(numberWithSign(5, "plus")); // 5
// console.log(numberWithSign(5, "minus")); // -5
// console.log(numberWithSign(5, "none")); // 0

// // typeof演算子での絞り込み
// function formatNumberOrString(v: string | number) {
//   if (typeof v === "number") {
//     return v.toFixed(3);
//   } else {
//     return v;
//   }
// }

// console.log(formatNumberOrString(3.14)); //3.140
// console.log(formatNumberOrString("uhyo")); //uhyo

// // 代数的データ型(の再現)
// type Animal = {
//   tag: "animal";
//   species: string;
// };
// type Human = {
//   tag: "human";
//   name: string;
// };

// type User = Animal | Human;

// function getUserName(user: User) {
//   if (user.tag === "human") {
//     return user.name; // Human型であるという絞込みあり
//   } else {
//     return "名無し";
//   }
// }

// const tama: User = {
//   tag: "animal",
//   species: "cat",
// };

// const uhyo: User = {
//   tag: "human",
//   name: "uhyo",
// };

// console.log(getUserName(tama));
// console.log(getUserName(uhyo));

// // switch文での制御

// type Robot = {
//   tag: "robot";
//   name: string;
// };

// const robot: Robot = {
//   tag: "robot",
//   name: "bob",
// };

// type User2 = Animal | Human | Robot;

// function getUserName2(user: User2): string {
//   switch (user.tag) {
//     case "human":
//       return user.name;
//     case "animal":
//       return "名無し";
//     case "robot":
//       return `CPU ${user.name}`;
//   }
// }
