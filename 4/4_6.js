var getFizzBuzz = function (i) {
    var message = "";
    if (i % 3 === 0 && i % 5 === 0) {
        message = "FizzBazz";
    }
    else if (i % 3 === 0) {
        message = "Fizz";
    }
    else if (i % 5 === 0) {
        message = "Buzz";
    }
    else {
        message = String(i);
    }
    return message;
};
// 関数に分割 -> letを使う範囲が狭まる -> メイン処理の可読性が向上する
var sequence = function (min, max) {
    var nums = [];
    for (var i = min; i <= max; i++) {
        nums.push(i);
    }
    return nums;
};
for (var _i = 0, _a = sequence(1, 100); _i < _a.length; _i++) {
    var i = _a[_i];
    var message = getFizzBuzz(i);
    console.log(message);
}
function map(array, callback) {
    var result = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        result.push(callback(i));
    }
    return result;
}
var data = [1, 1, 2, 3, 5, 8, 13];
var result = map(data, function (x) { return x * 10; });
console.log(result);
function map2(array, callback) {
    var result = [];
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var i = array_2[_i];
        result.push(callback(i));
    }
    return result;
}
var data2 = [1, -3, -2, 8, 0, -1];
var result2 = map2(data2, function (x) { return x >= 0; });
console.log(result2);
