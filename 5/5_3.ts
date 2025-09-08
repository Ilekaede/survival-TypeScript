// type HasName = {
//   name: string;
// };

// // クラスの継承
// class User implements HasName {
//   //UserはHasNameの部分型
//   name: string;
//   protected age: number;
//   private _isAdult: boolean;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//     this._isAdult = age >= 20;
//   }

//   public isAdult() {
//     return this._isAdult;
//   }
// }

// class PremiumUser extends User {
//   rank: number;

//   // 親クラスの機能を上書き
//   // ()=> booleanかその部分型でなければならない
//   // overrideは宣言・明記するだけ機能だが、親クラスに無いものにつけるとコンパイルエラーを吐いてくれる
//   public override isAdult(): boolean {
//     return this.age >= 20; //親クラスでageがprotectedで宣言されているので参照できる
//   }

//   constructor(name: string, age: number, rank: number) {
//     super(name, age); //super呼び出しで親クラスのコンストラクタ呼び出し
//     this.rank = rank;
//   }
//   public setAge(newAge: number) {
//     this.age = newAge;
//   }
// }

// const uhyo = new PremiumUser("uhyo", 26, 1);
// console.log(uhyo.rank);
// console.log(uhyo.name); // PremiumUser型はrankしかプロパティが宣言されていないが、継承しているためにUser型のプロパティ・コンストラクタ・メソッドが利用できる
// console.log(uhyo.isAdult());

// function getMessage(u: User) {
//   return `こんにちは、${u.name}さん`;
// }

// const john = new User("John Smith", 15);
// const taro = new PremiumUser("Taro Yamada", 15, 2);

// console.log(john.isAdult()); //false
// console.log(taro.isAdult()); //true
// // console.log(getMessage(john));
// // console.log(getMessage(uhyo));
