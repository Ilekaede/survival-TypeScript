function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

console.log(range(3, 6)); //[ 3, 4, 5, 6 ]

type Human = {
  height: number;
  weight: number;
};

// const calcBMI = function (human: Human): number {
//   return human.weight / human.height ** 2;
// };

// // 分割代入もできる
// const calcBMI = function ({ height, weight }: Human): number {
//   return weight / height ** 2;
// };

// // アロー関数式
// // "function"の宣言がいらない
// const calcBMI = ({ height, weight }: Human): number => {
//   return weight / height ** 2;
// };

// アロー関数の省略形
const calcBMI = ({ height, weight }: Human): number => weight / height ** 2;

// エラーとなる書き方
type ReturnObj = {
  bmi: number;
};
// アロー関数のreturnとみなされているから
const calcBMIObject2 = ({ height, weight }: Human): ReturnObj => {
  bmi: weight / height ** 2;
};

// 関数式
const uhyo: Human = {
  height: 1.84,
  weight: 72,
};

console.log(calcBMI(uhyo)); // 21.266540642722116
