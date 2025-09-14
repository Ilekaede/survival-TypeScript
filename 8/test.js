import { readFile } from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";
const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "uhyo.txt");
const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            const result = readFile(dataFile, "utf8");
            resolve(result);
        }
        catch (error) {
            reject(error);
        }
    }, 1000);
});
// const p = data.then((result) => {
//   console.log(data);
// });
// const p1 = p.catch((error) => {
//   console.log(error);
// });
console.log(data);
let count = 0;
let currentIndex = 0;
while (true) {
    const nextIndex = data.indexOf("uhyo", currentIndex);
    if (nextIndex >= 0) {
        count++;
        currentIndex = nextIndex + 1;
    }
    else {
        break;
    }
}
console.log(count);
