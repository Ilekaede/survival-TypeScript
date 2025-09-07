// const getFizzBuzz = (i: number): string => {
//   let message = "";
//   if (i % 3 === 0 && i % 5 === 0) {
//     message = "FizzBazz";
//   } else if (i % 3 === 0) {
//     message = "Fizz";
//   } else if (i % 5 === 0) {
//     message = "Buzz";
//   } else {
//     message = String(i);
//   }
//   return message;
// };

// // 関数に分割 -> letを使う範囲が狭まる -> メイン処理の可読性が向上する
// const sequence = (min: number, max: number): number[] => {
//   const nums: number[] = [];
//   for (let i = min; i <= max; i++) {
//     nums.push(i);
//   }
//   return nums;
// };

// for (const i of sequence(1, 100)) {
//   const message = getFizzBuzz(i);
//   console.log(message);
// }

// function map(array: number[], callback: (value: number) => number): number[] {
//   const result: number[] = [];
//   for (const i of array) {
//     result.push(callback(i));
//   }
//   return result;
// }

// const data = [1, 1, 2, 3, 5, 8, 13];
// const result = map(data, (x) => x * 10);
// console.log(result);

// function map2<T, U>(array: T[], callback: (value: T) => U): U[] {
//   const result: U[] = [];
//   for (const i of array) {
//     result.push(callback(i));
//   }
//   return result;
// }

// const data2 = [1, -3, -2, 8, 0, -1];
// const result2: boolean[] = map2(data2, (x) => x >= 0);
// console.log(result2);
