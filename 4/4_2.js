var xRepeat = function (num) { return "x".repeat(num); };
// 型注釈は省略可能
var xRepeat2 = function (num) { return "x".repeat(num); }; // xRepeat2は.repeat()がstringを返すことからstring型であると型推論されている
// void型でも型注釈の省略可能
var g = function (num) {
    for (var i = 0; i < num; i++) {
        console.log("Hello, World!");
    }
};
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arr2 = nums.filter(function (x) { return x % 3 === 0; }); //xの型注釈はnums.fileter()が(value:number) => unknown型と決まっているから逆推論が働く
console.log(arr2);
var obj = {
    greet: function (str) { return "Hello, ".concat(str); },
};
var double = function (arg) {
    console.log(arg * 2);
};
double.isUsed = true;
console.log(double.isUsed);
double(500);
