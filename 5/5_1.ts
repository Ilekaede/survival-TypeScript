// // class User {
// //   name: string = ""; // 初期値を定義する必要あり
// //   age: number = 0;

// //   // メソッドをクラス内で宣言できる
// //   isAdult(): boolean {
// //     return this.age >= 20;
// //   }

// //   setAge(newAge: number) {
// //     this.age = newAge;
// //   }
// // }

// // class User {
// //   name?: string; // オプショナルなプロパティにもできる
// //   readonly age: number = 0; // readonlyにもできる
// // }

// // class User {
// //   //コンストラクタを入れることで初期化を省略できる
// //   name: string;
// //   readonly age: number;

// //   constructor(name: string, age: number) {
// //     this.name = name;
// //     this.age = age; // readonlyに対する代入でもエラーが出ない
// //   }

// //   // メソッドをクラス内で宣言できる
// //   isAdult(): boolean {
// //     return this.age >= 20;
// //   }
// // }

// // class User {
// //   static adminName: string = "uhyo"; // 静的プロパティ
// //   static getAdminUser() {
// //     return new User(User.adminName, 26);
// //   }
// //   name: string;
// //   readonly age: number;

// //   constructor(name: string, age: number) {
// //     this.name = name;
// //     this.age = age; // readonlyに対する代入でもエラーが出ない
// //   }

// //   // メソッドをクラス内で宣言できる
// //   isAdult(): boolean {
// //     return this.age >= 20;
// //   }
// // }

// // class User {
// //   static adminUser: User;
// //   static {
// //     this.adminUser = new User();
// //     this.adminUser.age = 9999;
// //   }

// //   private age: number = 0;

// //   getAge() {
// //     return this.age;
// //   }
// //   setAge(newAge: number) {
// //     if (newAge < 0 || newAge > 150) {
// //       return;
// //     }
// //     this.age = newAge;
// //   }
// // }

// // console.log(User.adminUser.getAge()); // 9999

// // class User {
// //   constructor(public name: string, private age: number) {} // アクセシビリティ修飾子の付与
// //   // メソッドをクラス内で宣言できる
// //   public isAdult(): boolean {
// //     return this.age >= 20;
// //   }
// // }

// // // クラス式
// // const User = class {
// //   constructor(public name: string, private age: number) {}
// //   public isAdult(): boolean {
// //     return this.age >= 20;
// //   }
// // };

// // const uhyo = new User("uhyo", 26);
// // console.log(uhyo.name);
// // // console.log(uhyo.age);

// // uhyo.name = "うひょ";
// // console.log(uhyo.name);
// // console.log(uhyo.isAdult());

// // console.log(User.adminName);
// // const admin = User.getAdminUser();
// // console.log(admin);
// // console.log(admin.isAdult());

// // コンストラクタ引数でのプロパティ宣言

// // クラス式

// // // クラスの静的初期化ブロック
// // console.log("Hello");
// // class C {
// //   static {
// //     console.log("uhyo");
// //   }
// // }
// // console.log("world!");

// // 型引数を持つクラス
// class User<T> {
//   name: string;
//   private age: number;
//   readonly data: T;

//   constructor(name: string, age: number, data: T) {
//     this.name = name;
//     this.age = age;
//     this.data = data;
//   }

//   public isAdult() {
//     return this.age >= 20;
//   }
// }

// const uhyo = new User<string>("uhyo", 26, "追加データ");
// const data = uhyo.data;

// const john = new User("John Smith", 15, { num: 123 });
// const data2 = john.data;
