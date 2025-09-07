import * as uhyo from "./uhyo.js";
import uhyoAge from "./uhyoAge.js";
import increment from "./counter.js";
import { Animal, type tama } from "./animal.js";

console.log(`uhyoの名前は${uhyo.getUhyoName()}で年齢は${uhyo.age}です`); // 関数自体を実行できる

console.log(`カウンターの値は${increment()}です`); // 呼び出しごとに値が増えていく
console.log(`カウンターの値は${increment()}です`);
console.log(`カウンターの値は${increment()}です`);

const dog: Animal = {
  species: "Canis lupus familiaris",
  age: 2,
};

// console.log(dog, tama);

const otherCat: typeof tama = {
  species: "Felis silberstris catus",
  age: 20,
};
console.log(otherCat);
