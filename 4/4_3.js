// 関数の部分型関係
var fromAge = function (age) { return ({
    name: "John Smith",
    age: age,
}); };
var f = fromAge; // HasName型のobjに対し、HasNameAndAgeを返すfromAgeを代入できてる
var obj = f(100); //objにはHasNameAndAge型のオブジェクトが入る
// 引数の型による部分型関係
var showName = function (obj) {
    console.log(obj.name);
};
// showNameとg、同じ実行結果として必要な条件を考えた時、showNameのほうが必要な引数が少なくて条件良くね？すなわちshowNameはgに対する上位互換だから部分型じゃね？という考え方。なのでオブジェクトのときと逆になる。
var g = showName; // showNameはgに対する部分型
g({
    name: "uhyo",
    age: 26,
});
var double = function (arg) { return arg * 2; };
var add = function (left, right) { return left + right; };
var bin = double; // UnaryFuncがBinaryFuncの部分型
console.log(bin(10, 100));
