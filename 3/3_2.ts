const obj: {
  foo: number;
  bar: string;
} = {
  foo: 123,
  bar: "Hello, World!",
};

//文字列リテラルを使うことができる
const obj2: {
  "foo bar": number;
} = {
  "foo bar": 123,
};

const obj3_2_1 = {
  foo: 123,
  bar: "Hello, World!",
};

obj3_2_1.foo = null; // nullをnumberに割り当てられない

// type文
type FooBarObj = {
  foo: number;
  bar: string;
};

const obj_3_2_2: FooBarObj = {
  foo: 123,
  bar: "Hello, World!",
};

// type文を後から宣言しても良い
const obj_3_2_2: FooBarObj = {
  foo: 123,
  bar: "Hello, World!",
};

type FooBarObj = {
  foo: number;
  bar: string;
};

// プリミティブ型に別名を与えることも可能
type UserId = string;
const id: UserId = "uhyo";

// interface型
interface FooBarObj1 {
  foo: number;
  bar: string;
}
const obj_3_2_3: FooBarObj1 = {
  foo: 0,
  bar: "string",
};

// インデックスシグネチャ
type PriceData = {
  [key: string]: number;
};
const data: PriceData = {
  apple: 220,
  coffee: 120,
  bento: 500,
};

data.chicken = 250; //これはOK
data.弁当 = "foo"; //これはだめ

// オプショナルなプロパティ
type MyObj = {
  foo: boolean;
  bar: boolean;
  baz?: number;
};

const obj_3_2_4: MyObj = {
  foo: false,
  bar: true,
};

const obj_3_2_4_2: MyObj = {
  foo: true,
  bar: false,
  baz: 1234,
};

console.log(obj_3_2_4.baz); // undefined

console.log(obj_3_2_4_2.baz * 2000); // undefinedの可能性があるのでコンパイルエラー

if (obj_3_2_4_2.baz !== undefined) {
  console.log(obj_3_2_4_2.baz * 2000); // 条件分岐しているのでOK
}

type MyObj3_2 = {
  readonly foo: number;
};

const obj_3_2_5: MyObj3_2 = { foo: 123 };

obj_3_2_5.foo = 0; //readonlyなので代入できない

// typeof

const num: number = 0;
type T = typeof num;

const foo3_2: T = 123; // Tはnumber型の別名、fooはnumber型となる

// 使用例
const obj_3_2_6 = {
  foo: 123,
  bar: "hi",
};

type T2 = typeof obj_3_2_6; // typeで型宣言していなくても型推論してくれる
const obj_3_2_6_2: T2 = {
  foo: -50,
  bar: "",
};
