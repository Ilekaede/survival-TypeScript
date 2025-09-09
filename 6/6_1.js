// //
// type Animal = {
//   species: string;
//   age: number;
// };
// // インターセクション型
// type Human = Animal & {
//   name: string;
// };
function getName(human) {
    return human.name;
}
function getSpecies(animal) {
    return animal.species;
}
var uhyo = {
    name: "uhyo",
};
var mysteryFunc = Math.random() < 0.5 ? getName : getSpecies; //ユニオン型を取る
// mysteryFunc(uhyo) // Animalのときに対応できないのでエラー吐く
// インターセクション型を定義することで回避
var tama = {
    species: "cat",
    name: "tama",
};
mysteryFunc(tama);
