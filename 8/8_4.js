// // async関数の返り値は必ずPromiseになる
// async function get3() {
//   console.log("get3が呼び出された");
//   return 3;
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// console.log("get3を呼び出すよ");
// const p = get3();
// p.then((num) => {
//   console.log(`num is ${num}`); // 非同期処理なので一番最後
// });
// console.log("get3を呼び出した");
// 以下の順番で出力
// get3を呼び出すよ
// get3が呼び出された
// get3を呼び出した
// num is 3
// // await式
// const sleep = (duration: number) => {
//   return new Promise<void>((resolve) => {
//     setTimeout(resolve, duration);
//   });
// };
// async function get4() {
//   await sleep(1000); // 与えられたPromiseの結果が出るまで待つ
//   return 4;
// }
// const p4 = get4();
// p4.then((num) => {
//   console.log(`num is ${num}`);
// });
// async function get3() {
//   console.log("get3が呼び出された");
//   await sleep(1000);
//   console.log("awaitの次に進んだ");
//   return 3;
// }
// console.log("get3を呼び出すよ");
// const p = get3();
// p.then((num) => {
//   console.log(`num is ${num}`); // 非同期処理なので一番最後
// });
// console.log("get3を呼び出した");
// awaitの返り値
var sleep = function (duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
};
function get3() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sleep(1000)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, 3];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var p, q, r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, get3()];
                case 1:
                    p = _a.sent();
                    return [4 /*yield*/, get3()];
                case 2:
                    q = _a.sent();
                    return [4 /*yield*/, get3()];
                case 3:
                    r = _a.sent();
                    return [2 /*return*/, p + q + r];
            }
        });
    });
}
main().then(function (result) {
    console.log("result is ".concat(result));
});
