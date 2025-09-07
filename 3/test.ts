// type User = {
//   name: string;
//   age: number;
//   premiumUser: boolean;
// };

// const data: string = `
// uhyo, 26, 1
// John Smith, 17, 0
// Mary Sue, 14, 1
// `;
// let datas = data.split("\n");

// const members = [];
// for (const data of datas) {
//   if (data == "") {
//     continue;
//   } else {
//     members.push(data);
//   }
// }

// const users = [];
// for (const member of members) {
//   let mem = member.split(","); // const []
//   let usr: User = {
//     name: mem[0],
//     age: parseInt(mem[1]),
//     premiumUser: !!parseInt(mem[2]),
//   };
//   users.push(usr);
// }

// // 上の処理を分割代入でひとまとめにできる
// // const [name, ageString, premiumUserString] = member.split(',')
// // const age = Number(ageString)
// // const premiumUser = premiumUserString === '1'
// // users.push({
// //   name,
// //   age,
// //   premiumUser
// // })

// for (const user of users) {
//   if (user.premiumUser) {
//     console.log(`${user.name}(${user.age})はプレミアムユーザーです`);
//   } else {
//     console.log(`${user.name}(${user.age})はプレミアムユーザーではありません`);
//   }
// }
