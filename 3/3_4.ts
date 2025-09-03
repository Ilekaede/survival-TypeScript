// 型引数を持つ型
type User<T> = {
  name: string;
  child: T;
};

//ex
type Family<Parent, Child> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

// 型引数を持たせていないためエラー
const obj_3_4: Family = {
  mother: 111,
  father: 100,
  child: "100",
};

// extends型
type HasName = {
  name: string;
};

type Family1<Parent extends HasName, Child extends HasName> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

// number型がHasNameの部分型でないためエラー
type T1 = Family1<number, string>;

type Animal = {
  name: string;
};

type Human = {
  name: string;
  age: number;
};

// AnimalとHumanがHasNameの部分型のためOK
type T3 = Family1<Animal, Human>;

Parent < -HasName持ってる;
Child < -Parent持ってる < -HasName持ってる;

type Family2<Parent extends HasName, Child extends Parent> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

type S = Family2<Animal, Human>;
type T4 = Family2<Human, Animal>; // HumanがParentとして入っているのでAnimalはHumanのプロパティをすべて含む必要がある。しかし、AnimalにはHumanのプロパティである'age'が含まれていないのでエラーを吐いている

// オプショナルな型引数
type Family3<Parent = Animal, Child = Animal> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

// 指定しない場合はオプショナルで指定された型となる
// 通常の使い方
type S2 = Family3<string, string>;
// T5はFamily3<Animal, Animal>と同じ
type T5 = Family3;
// UはFamily<string, Animal>と同じ
type U = Family3<string>;
