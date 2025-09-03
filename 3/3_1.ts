const obj = {
  foo: 123,
  bar: "Hello, World!",
};

console.log(obj.foo);
console.log(obj.bar);

const user = {
  name: input ? input : "名無し",
  age: 20,
};

// プロパティに入れる内容をあらかじめ計算して変数に入れる
const name = input ? input : "名無し";
const user = {
  name: name,
  age: 20,
};

// プロパティ名と変数名が同じ場合は省略できる
const name = input ? input : "名無し";
const user = {
  name,
  age: 20,
};

// 文字列リテラル
// プロパティ名をクォーテーションで囲むことで識別子として使えない文字列でも利用できる
// クォーテーションの有無、より一般的なのは前者な気がしてるが日本語で取り出したいときは便利そう
// ドット記法でアクセスできないの、書き方に工夫が必要だからチームの方針に合わせる必要あるか
const obj = {
  foo: 123,
  "foo bar": -500,
  "↑↓↑↓": "",
};

// 数値リテラル
// 使い勝手悪そう
const obj = {
  1: "one",
  2.05: "two point o five",
};
// アクセスはブラ-ケット記法のみ
console.log(obj["1"]);

// 動的なプロパティ名
// [式]の構文で書く
const propName = "foo";
const obj = {
  [propName]: 123,
};
console.log(obj.foo);

// プロパティアクセス
const user = {
  name: "uhyo",
  age: 25,
};

user.age = 26;
console.log(user.age); // 26

// アクセルする方法を動的に決める
import { createInterface } from "readline";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages = {
  good: "0以上の数値が入力されました！",
  bad: "負の数値を入力しないでください！",
};

rl.question("数値を入力してください:", (line) => {
  const num = Number(line);
  console.log(messages[num >= 0 ? "good" : "bad"]);
  rl.close();
});

// 次のやり方はエラーが出る
const user = {
  name: "uhyo",
  age: 25,
};

user = {
  name: "John Smith",
  age: 16,
};
