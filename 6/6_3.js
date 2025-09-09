// 型の絞り込み(コントロールフロー解析)
function signNumber(type) {
    return type === "plus" ? 1 : -1;
}
function numberWithSign(num, type) {
    if (type === "none") {
        return 0;
    }
    else {
        return num * signNumber(type); // ここでのtypeはSignType型のみとなる
    }
}
// 条件演算子でもいける
function numberWithSign2(num, type) {
    return type === "none" ? 0 : num * signNumber(type);
}
console.log(numberWithSign(5, "plus")); // 5
console.log(numberWithSign(5, "minus")); // -5
console.log(numberWithSign(5, "none")); // 0
// typeof演算子での絞り込み
function formatNumberOrString(v) {
    if (typeof v === "number") {
        return v.toFixed(3);
    }
    else {
        return v;
    }
}
console.log(formatNumberOrString(3.14)); //3.140
console.log(formatNumberOrString("uhyo")); //uhyo
function getUserName(user) {
    if (user.tag === "human") {
        return user.name;
    }
    else {
        return "名無し";
    }
}
var tama = {
    tag: "animal",
    species: "cat",
};
var uhyo = {
    tag: "human",
    name: "uhyo",
};
console.log(getUserName(tama));
console.log(getUserName(uhyo));
