var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr1 = [4, 5, 6];
var arr2 = __spreadArray([1, 2, 3], arr1, true);
console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]
// 配列型
var arr = [1, 10, 100];
// const arr3: string[] = [123, -456]; //要素の型が配列の型に反するのでコンパイルエラー
// 配列型の書き方は2種類、流儀によって違うぽい
var arr4 = [true, false];
var arr5 = [{ name: "田中" }, { name: "スズキ" }];
// ユニオン型も利用できる
var arr6 = [100, "文字列", false];
//readonly配列
var arr7 = [1, 2, 3];
// arr7[1] = 10; // コンパイルエラー
// 配列のメソッド
// push
var arr8 = [1, 2, 3];
arr8.push(4);
console.log(arr8);
// arr8.push("foo"); // 数値型でないのでエラー
// 配列の先頭に要素を追加
// readonlyには使えない
arr8.unshift(0); // [0, 1, 2, 3]
// arr7.push(0);
// 配列が与えられて値を含むかの真偽値を返す
console.log(arr8.includes(1)); //true
console.log(arr8.includes(1000)); // false
// for-of文によるループ
var arr9 = [1, 2, 3];
for (var _i = 0, arr9_1 = arr9; _i < arr9_1.length; _i++) {
    var elm = arr9_1[_i];
    console.log(elm + 1);
}
