// type Option = HaveValue | NotHaveValue;

type Option<T> =
  | {
      type: "have";
      value: T;
    }
  | {
      type: "no";
    };

function isHave<T>(obj: Option<T>): obj is { type: "have"; value: T } {
  return obj.type === "have";
}

function doYouHaveTag(obj: Option<number>) {
  if (obj === undefined) {
    return;
  }
  if (isHave(obj)) {
    // ここでユーザー定義型ガードを呼び出した関数側に入れないとエラー吐くらしい
    return `yes, ${obj.value}`;
  } else {
    return "no";
  }
}

const a: Option<number> = {
  type: "no",
};

const b: Option<number> = {
  type: "have",
  value: 123,
};

console.log(doYouHaveTag(a));
console.log(doYouHaveTag(b));

function mapOption<T, U>(obj: Option<T>, callback: (v: T) => U): Option<U> {
  if (isHave(obj)) {
    const result: Option<U> = {
      type: "have",
      value: callback(obj.value),
    };
    return result;
  } else {
    const result: Option<U> = {
      type: "no",
    };
    return result;
  }
}

function doubleOption(obj: Option<number>) {
  return mapOption(obj, (x) => x * 2);
}

console.log(doubleOption(a));
console.log(doubleOption(b));
