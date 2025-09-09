// type Option = HaveValue | NotHaveValue;
function isHave(obj) {
    return obj.type === "have";
}
function doYouHaveTag(obj) {
    if (obj === undefined) {
        return;
    }
    if (isHave(obj)) {
        // ここでユーザー定義型ガードを呼び出した関数側に入れないとエラー吐くらしい
        return "yes, ".concat(obj.value);
    }
    else {
        return "no";
    }
}
var a = {
    type: "no",
};
var b = {
    type: "have",
    value: 123,
};
console.log(doYouHaveTag(a));
console.log(doYouHaveTag(b));
function mapOption(obj, callback) {
    if (isHave(obj)) {
        var result = {
            type: "have",
            value: callback(obj.value),
        };
        return result;
    }
    else {
        var result = {
            type: "no",
        };
        return result;
    }
}
function doubleOption(obj) {
    return mapOption(obj, function (x) { return x * 2; });
}
console.log(doubleOption(a));
console.log(doubleOption(b));
