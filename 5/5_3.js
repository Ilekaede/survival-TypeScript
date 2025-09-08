var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// クラスの継承
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
var PremiumUser = /** @class */ (function (_super) {
    __extends(PremiumUser, _super);
    function PremiumUser(name, age, rank) {
        var _this = _super.call(this, name, age) || this; //super呼び出しで親クラスのコンストラクタ呼び出し
        _this.rank = rank;
        return _this;
    }
    // 親クラスの機能を上書き
    // ()=> booleanかその部分型でなければならない
    PremiumUser.prototype.isAdult = function () {
        return true;
    };
    return PremiumUser;
}(User));
var uhyo = new PremiumUser("uhyo", 26, 1);
console.log(uhyo.rank);
console.log(uhyo.name); // PremiumUser型はrankしかプロパティが宣言されていないが、継承しているためにUser型のプロパティ・コンストラクタ・メソッドが利用できる
console.log(uhyo.isAdult());
function getMessage(u) {
    return "\u3053\u3093\u306B\u3061\u306F\u3001".concat(u.name, "\u3055\u3093");
}
var john = new User("John Smith", 15);
var taro = new PremiumUser("Taro Yamada", 15, 2);
console.log(john.isAdult()); //false
console.log(taro.isAdult()); //true
// console.log(getMessage(john));
// console.log(getMessage(uhyo));
