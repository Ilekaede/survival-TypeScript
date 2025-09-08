// this
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.isAdult = function () {
        return this.age >= 20;
    };
    User.prototype.filterOlder = function (users) {
        var _this = this;
        return users.filter(function (u) { return u.age > _this.age; });
    };
    return User;
}());
var uhyo = new User("uhyo", 26);
var john = new User("John Smith", 15);
var bob = new User("Bob", 40);
var older = uhyo.filterOlder([john, bob]);
console.log(older);
