// 部分型関係
type FooBar = {
  foo: string;
  bar: number;
};

type FooBarBaz = {
  foo: string;
  bar: number;
  baz: boolean;
};

const obj3_3: FooBarBaz = {
  foo: "hi",
  bar: 1,
  baz: false,
};

const obj3_3_2: FooBar = obj3_3; //FooBarBazはFooBarの上位互換

console.log(obj3_3_2); // { foo: 'hi', bar: 1, baz: false }

type User = { name: string; age: number };
const u: User = {
  name: "uhyo",
  age: 26,
  telNumber: "000000", //User型に入れても意味がないためエラーを出す
};

type User = { name: string; age: number };
const obj3_3_4 = {
  name: "uhyo",
  age: 26,
  telNumber: "000000", //User型に入れても意味がないためエラーを出す
};
const u: User = obj3_3_4; //objがUser型の部分型だから型システム上の問題はない
