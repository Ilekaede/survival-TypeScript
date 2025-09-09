class User {
  private readonly name: string;
  private readonly age: number;

  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("名前は空にできません");
    }

    this.name = name;
    this.age = age;
  }
}

function createUser(name: string, age: number) {
  return (message: string): string => {
    return `${name}(${age})「${message}」`;
  };
}

const getMessage = createUser("uhyo", 26);

console.log(getMessage("こんにちは")); // クロージャ

type Human = {
  name: string;
  age: number;
};

type Animal = {
  name: string;
};

const callName = (obj: Animal) => {
  console.log(obj.name);
};

const g: (obj1: Human, obj2: Animal) => void = callName;

g(
  {
    name: "aaa",
    age: 100,
  },
  {
    name: "bbb",
  }
);
