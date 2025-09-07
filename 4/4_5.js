// 変数スコープと関数
// 異なるスコープの中ならば同じ変数でも宣言可能
var repeatLength = 5;
var repeat = function (element) {
    var repeatLength = 3;
    var result = [];
    for (var i = 0; i < repeatLength; i++) {
        result.push(element);
    }
    return result;
};
console.log(repeat("a"));
console.log(repeatLength);
