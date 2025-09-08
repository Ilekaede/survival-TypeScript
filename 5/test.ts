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
