var foo = "foo";
// const bar:FooString = "bar" // fooでないのでエラー
// テンプレートリテラルを効かせる
function makeKey(userName) {
    return "user:".concat(userName);
}
// makeKeyの返り値の型は推論される
var uhyoKey = makeKey("uhyo");
// ユニオン型とリテラル型の組み合わせ
function signNumber(type) {
    return type === "plus" ? 1 : -1;
}
console.log(signNumber("plus"));
console.log(signNumber("minus"));
