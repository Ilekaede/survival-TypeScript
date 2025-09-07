"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uhyo = require("./uhyo.js");
var counter_js_1 = require("./counter.js");
console.log("uhyo\u306E\u540D\u524D\u306F".concat(uhyo.getUhyoName(), "\u3067\u5E74\u9F62\u306F").concat(uhyo.age, "\u3067\u3059")); // 関数自体を実行できる
console.log("\u30AB\u30A6\u30F3\u30BF\u30FC\u306E\u5024\u306F".concat((0, counter_js_1.default)(), "\u3067\u3059")); // 呼び出しごとに値が増えていく
console.log("\u30AB\u30A6\u30F3\u30BF\u30FC\u306E\u5024\u306F".concat((0, counter_js_1.default)(), "\u3067\u3059"));
console.log("\u30AB\u30A6\u30F3\u30BF\u30FC\u306E\u5024\u306F".concat((0, counter_js_1.default)(), "\u3067\u3059"));
var dog = {
    species: "Canis lupus familiaris",
    age: 2,
};
// console.log(dog, tama);
var otherCat = {
    species: "Felis silberstris catus",
    age: 20,
};
console.log(otherCat);
