"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var url_1 = require("url");
var filePath = (0, url_1.fileURLToPath)(import.meta.url);
var fileDir = path.dirname(filePath);
var dataFile = path.join(fileDir, "./uhyo.txt");
var data = fs.readFileSync(dataFile, { encoding: "utf8" });
var searchWord = "uhyo";
var count = 0;
var i = 0;
var str = data;
while ((i = str.indexOf(searchWord, i)) !== -1) {
    count++;
    i += searchWord.length;
}
console.log(count);
