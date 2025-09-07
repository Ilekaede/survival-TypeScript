// ジェネリック関数
function repeat(element, length) {
    //入力の型によって出力を決めるのはあるある
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}
// 呼び出すたびに異なる型引数を与えることができる
console.log(repeat("a", 5));
console.log(repeat(123, 3));
// function関数式
var repeat2 = function (element, length) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
};
// アロー関数式
var repeat3 = function (element, length) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
};
// メソッド記法
var utils = {
    repeat: function (element, length) {
        var result = [];
        for (var i = 0; i < length; i++) {
            result.push(element);
        }
        return result;
    },
};
// 型引数リストが複数の場合
var pair = function (left, right) { return [
    left,
    right,
]; };
var p = pair("uhyo", 26);
// extends(部分型制約)
var repeat4 = function (element, length) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
};
console.log(repeat4({
    name: "uhyo",
    age: 26,
}, 3));
