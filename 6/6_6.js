// any型
// any型の引数に対してなんでもできちゃう
function doWhatEver(obj) {
    console.log(obj.user.name);
    obj();
    var result = obj * 10;
    return result;
}
// unknown型
function doNothing(val) {
    console.log(val);
}
doNothing(3);
doNothing({
    user: {
        name: "uhyo",
    },
});
doNothing(function () {
    console.log("hi");
});
