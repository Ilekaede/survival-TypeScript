// 変数スコープと関数

// 異なるスコープの中ならば同じ変数でも宣言可能
const repeatLength = 5;
const repeat = function <T>(element: T): T[] {
  const repeatLength = 3;
  const result: T[] = [];
  for (let i = 0; i < repeatLength; i++) {
    result.push(element);
  }
  return result;
};

console.log(repeat("a")); // [ 'a', 'a', 'a' ]
console.log(repeatLength); // 5

// ブロックスコープ
function sabayomi(age: number) {
  // lieはifブロックの中のみで利用可能
  if (age >= 30) {
    const lie = age - 10;
    return lie;
  }
  // 別ブロックなら同じ変数でも宣言可能
  if (age >= 20) {
    const lie = age - 5;
    return lie;
  }
  // console.log(lie); <- コンパイルエラー
  return age;
}
