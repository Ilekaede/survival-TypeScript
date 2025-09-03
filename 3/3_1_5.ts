// スプレッド構文
const obj1 = {
  bar: 456,
  baz: 789,
};

const obj2 = {
  foo: 123,
  ...obj1,
};

console.log(obj2); // { foo: 123, bar: 456, baz: 789 }

const obj3 = {
  ...obj2,
  foo: -9999,
};

console.log(obj3); // { foo: -9999, bar: 456, baz: 789 }

// 明示的にコピーしていない例
const foo = { num: 123 };
const bar = foo;
console.log(bar.num);
bar.num = 0; //fooもbarも同じオブジェクトを参照している → barを変換するとfooにも影響が出る
console.log(foo); // { num: 0 }
console.log(bar); // { num: 0 }

// 明示的にコピーしている例
const foo2 = { num: 123 };
const bar2 = { ...foo2 };
console.log(bar2.num);
bar2.num = 0;
console.log(foo2); //{ num: 123 }
console.log(bar2); //{ num: 0 }

// ネストに注意
const foo3 = { obj: { num: 123 } };
const bar3 = { ...foo3 };
bar3.obj.num = 0;
console.log(foo3); //{ obj: { num: 0 } }

// オブジェクトに対する一致判定
const foo4 = { num: 123 };
const bar4 = foo4;
const baz = { num: 123 };
const baz2 = { ...foo4 };

console.log(foo4 === bar4); //true
console.log(foo4 === baz); //false
console.log(foo4 === baz2); //false
