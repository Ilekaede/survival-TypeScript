// クラスの型
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.isAdult = function () {
        return this.age >= 20;
    };
    return User;
}());
var uhyo = new User("uhyo", 26); // User型
// 型チェックが通る
var john = {
    name: "John Smith",
    age: 15,
    isAdult: function () { return true; },
};
// // クラスオブジェクトそのものが持つ型は？
// type MyUserConstructor = new () => User; // MyUserConstructor型をnew () => User型の別名として定義
// const MyUser: MyUserConstructor = User;
// const u = new MyUser();
// console.log(u.name, u.age);
// instanceof演算子
console.log(uhyo instanceof User); //true
console.log(john instanceof User); //Userクラスのインスタンスでないからfalse
function getPrice(customer) {
    if (customer instanceof User) {
        if (customer.name === "uhyo") {
            return 0;
        }
    }
    return customer.age < 18 ? 1000 : 1800;
}
var customer1 = { age: 15 };
var customer2 = { age: 40 };
console.log(getPrice(customer1));
console.log(getPrice(customer2));
console.log(getPrice(uhyo));
