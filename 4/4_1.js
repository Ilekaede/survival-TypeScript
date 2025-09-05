function range(min, max) {
    var result = [];
    for (var i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}
console.log(range(3, 6)); //[ 3, 4, 5, 6 ]
// const calcBMI = function (human: Human): number {
//   return human.weight / human.height ** 2;
// };
// // 分割代入もできる
// const calcBMI = function ({ height, weight }: Human): number {
//   return weight / height ** 2;
// };
// アロー関数式
var calcBMI = function (_a) {
    var height = _a.height, weight = _a.weight;
    return weight / Math.pow(height, 2);
};
// 関数式
var uhyo = {
    height: 1.84,
    weight: 72,
};
console.log(calcBMI(uhyo)); // 21.266540642722116
