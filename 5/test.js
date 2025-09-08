var User = /** @class */ (function () {
    function User(name, age) {
        if (name === "") {
            throw new Error("名前は空にできません");
        }
        this.name = name;
        this.age = age;
    }
    return User;
}());
function createUser(name, age) {
    return function (message) {
        return "".concat(name, "(").concat(age, ")\u300C").concat(message, "\u300D");
    };
}
var getMessage = createUser("uhyo", 26);
console.log(getMessage("こんにちは"));
