// // as による型アサーション
// type Animal = {
//   tag: "animal";
//   species: string;
// };

// type Human = {
//   tag: "human";
//   name: string;
// };

// type User = Animal | Human;

// function getNamesIfAllHuman(users: readonly User[]): string[] | undefined {
//   if (users.every((user) => user.tag === "human")) {
//     return (users as Human[]).map((user) => user.name);
//   }
//   return undefined;
// }

// const tama: Animal = {
//   tag: "animal",
//   species: "cat",
// };

// const uhyo: Human = {
//   tag: "human",
//   name: "uhyo",
// };

// console.log();

// // as const
// const name1 = ["uhyo", "John", "taro"]; // string[]
// const name2 = ["uhyo", "John", "taro"] as const; // readonly ["uhyo", "John", "taro"]
// type Name = (typeof name2)[number]; // name2からName型の作成ができている
