var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var obj3_6_1 = {
    foo3_6: 123,
    bar3_6: "abc",
};
var foo3_6 = obj3_6_1.foo3_6, bar3_6 = obj3_6_1.bar3_6;
// プロパティ名と変数名を別にしたい場合
// プロパティ名：変数名
var foo3_6_1 = obj3_6_1.foo3_6, bar3_6_1 = obj3_6_1.bar3_6;
// ネストしたパターン
var nested = {
    num3_6: 123,
    obj3_6_2: {
        foo3_6_2: "Hello",
        bar_3_6_2: "world!",
    },
};
var num3_6 = nested.num3_6, foo3_6_2 = nested.obj3_6_2.foo3_6_2;
console.log(num3_6);
console.log(foo3_6_2);
// 配列の分割代入
var arr3_6 = [1, 2, 4, 8, 16];
var first = arr3_6[0], second = arr3_6[1], third = arr3_6[2];
console.log(first);
console.log(second);
console.log(third);
// 空白を用いて要素をスキップ
var foo3_6_3 = arr3_6[1], bar3_6_3 = arr3_6[4];
console.log(foo3_6_3);
console.log(bar3_6_3);
//tuple型への適用
var tuple3_6 = ["uhyo", 123];
var name3_6 = tuple3_6[0], age3_6 = tuple3_6[1];
console.log(name3_6);
console.log(age3_6);
var obj3_6_4 = {};
var obj3_6_5 = { foo: 123 };
console.log(obj3_6_4.foo); // undefined
// const foo = obj.foo !== undefined ? obj.foo : 500 と同じ
var _a = obj3_6_4.foo, foo = _a === void 0 ? 500 : _a;
console.log(foo);
var _b = obj3_6_5.foo, bar = _b === void 0 ? 500 : _b; // barに123が代入される
console.log(bar);
var nested1 = {
    obj: { foo: 123 },
};
var nested2 = {};
var _c = nested1.obj, _d = _c === void 0 ? { foo: 500 } : _c, foo1 = _d.foo;
var _e = nested2.obj, _f = _e === void 0 ? { foo: 500 } : _e, foo2 = _f.foo;
// restパターン
var obj = {
    foo3: 123,
    bar: "string",
    baz: false,
};
var foo3 = obj.foo3, restObj = __rest(obj, ["foo3"]); // restでbarもbazも入ってる
console.log(foo3); // 123
console.log(restObj); // { bar: 'string', baz: false }
var arr = [1, 2, 3, 4, 5, 6];
var first1 = arr[0], second2 = arr[1], third3 = arr[2], rest = arr.slice(3);
console.log(rest);
