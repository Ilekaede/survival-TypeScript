var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function setAge(human, age) {
    return __assign(__assign({}, human), { age: age });
}
var uhyo = {
    type: "human",
    name: "uhyo",
    age: 26,
};
var uhyo2 = setAge(uhyo, 27);
console.log(uhyo2);
var key = "name";
key = "age";
console.log(key);
var mmConversionTable = {
    mm: 1,
    cm: 10,
    m: 1e3,
    km: 1e6,
};
function convertUnits(value, unit) {
    var mmValue = value * mmConversionTable[unit];
    return {
        mm: mmValue,
        m: mmValue / 1e3,
        km: mmValue / 1e6,
    };
}
console.log(convertUnits(5600, "cm"));
