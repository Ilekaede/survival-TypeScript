// // クラスの型
// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   isAdult() {
//     return this.age >= 20;
//   }
// }

// const uhyo = new User("uhyo", 26); // User型

// // 型チェックが通る
// const john: User = {
//   name: "John Smith",
//   age: 15,
//   isAdult: () => true,
// };

// // // クラスオブジェクトそのものが持つ型は？
// // type MyUserConstructor = new () => User; // MyUserConstructor型をnew () => User型の別名として定義
// // const MyUser: MyUserConstructor = User;
// // const u = new MyUser();
// // console.log(u.name, u.age);

// // instanceof演算子
// console.log(uhyo instanceof User); //true
// console.log(john instanceof User); //Userクラスのインスタンスでないからfalse

// // instanceof演算子による型の絞り込み
// type HasAge = {
//   age: number;
// };

// function getPrice(customer: HasAge) {
//   //customerの型がHasAge
//   if (customer instanceof User) {
//     //customerの型がUser
//     if (customer.name === "uhyo") {
//       return 0;
//     }
//   }
//   return customer.age < 18 ? 1000 : 1800;
// }

// const customer1: HasAge = { age: 15 };
// const customer2: HasAge = { age: 40 };

// console.log(getPrice(customer1));
// console.log(getPrice(customer2));
// console.log(getPrice(uhyo)); //UserがHasAgeの部分型だからgetPriceでも利用できる
