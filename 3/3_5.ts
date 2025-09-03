const arr1 = [4, 5, 6];
const arr2 = [1, 2, 3, ...arr1];
console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]

// 配列型
const arr: number[] = [1, 10, 100];
// const arr3: string[] = [123, -456]; //要素の型が配列の型に反するのでコンパイルエラー

// 配列型の書き方は2種類、流儀によって違うぽい
const arr4: boolean[] = [true, false];
const arr5: Array<{
  name: string;
}> = [{ name: "田中" }, { name: "スズキ" }];

// ユニオン型も利用できる
const arr6 = [100, "文字列", false];

//readonly配列
const arr7: readonly number[] = [1, 2, 3];
// arr7[1] = 10; // コンパイルエラー

// 配列のメソッド
// push
const arr8 = [1, 2, 3];
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
const arr9 = [1, 2, 3];
for (const elm of arr9) {
  //elmがループごとに作り直されるからconstでも問題ない
  console.log(elm + 1); //2, 3, 4が1つずつ改行込みで出力
}

// タプル型
let tuple: [string, number] = ["foo", 0];
tuple = ["aiueo", 1];

const str = tuple[0];
const num1 = tuple[1];

const nothing = tuple[2]; // タプル型の要素数を超えているのでエラー
