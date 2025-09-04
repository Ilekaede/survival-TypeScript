var data = "\nuhyo, 26, 1\nJohn Smith, 17, 0\nMary Sue, 14, 1\n";
var datas = data.split("\n");
var members = [];
for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {
    var data_1 = datas_1[_i];
    if (data_1 == "") {
        continue;
    }
    else {
        members.push(data_1);
    }
}
var users = [];
for (var _a = 0, members_1 = members; _a < members_1.length; _a++) {
    var member = members_1[_a];
    var mem = member.split(",");
    var usr = {
        name: mem[0],
        age: parseInt(mem[1]),
        premiumUser: !!parseInt(mem[2]),
    };
    users.push(usr);
}
for (var _b = 0, users_1 = users; _b < users_1.length; _b++) {
    var user = users_1[_b];
    if (user.premiumUser) {
        console.log("".concat(user.name, "(").concat(user.age, ")\u306F\u30D7\u30EC\u30DF\u30A2\u30E0\u30E6\u30FC\u30B6\u30FC\u3067\u3059"));
    }
    else {
        console.log("".concat(user.name, "(").concat(user.age, ")\u306F\u30D7\u30EC\u30DF\u30A2\u30E0\u30E6\u30FC\u30B6\u30FC\u3067\u306F\u3042\u308A\u307E\u305B\u3093"));
    }
}
