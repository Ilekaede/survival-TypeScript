var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// スプレッド構文
var obj1 = {
    bar: 456,
    baz: 789,
};
var obj2 = __assign({ foo: 123 }, obj1);
console.log(obj2); // { foo: 123, bar: 456, baz: 789 }
var obj3 = __assign(__assign({}, obj2), { foo: -9999 });
console.log(obj3); // { foo: -9999, bar: 456, baz: 789 }
// 明示的にコピーしていない例
var foo = { num: 123 };
var bar = foo;
console.log(bar.num);
bar.num = 0; //fooもbarも同じオブジェクトを参照している → barを変換するとfooにも影響が出る
console.log(foo); // { num: 0 }
console.log(bar); // { num: 0 }
// 明示的にコピーしている例
var foo2 = { num: 123 };
var bar2 = __assign({}, foo2);
console.log(bar2.num);
bar2.num = 0;
console.log(foo2); //{ num: 123 }
console.log(bar2); //{ num: 0 }
// ネストに注意
var foo3 = { obj: { num: 123 } };
var bar3 = __assign({}, foo3);
bar3.obj.num = 0;
console.log(foo3); //{ obj: { num: 0 } }
// オブジェクトに対する一致判定
var foo4 = { num: 123 };
var bar4 = foo4;
var baz = { num: 123 };
var baz2 = __assign({}, foo4);
console.log(foo4 === bar4); //false
console.log(foo4 === baz); //false
console.log(foo4 === baz2); //false
