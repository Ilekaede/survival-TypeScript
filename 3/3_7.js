// その他の組み込みオブジェクト
// Date
var d = new Date();
console.log(d);
console.log(Date.now());
// 正規表現
var r = /ab+c/;
console.log(r.test("abbbbbbc")); //true
console.log(r.test("hello, abc world!")); //true
console.log(r.test("acb")); // false
// Map, Set
var map = new Map();
map.set("foo", 1234); //(key, value)の1to1対応
console.log(map.get("foo")); //1234
console.log(map.get("bar")); //undefined
var str = "Hello, World!";
console.log(str.length);
