{
  /**
   * Javascript
   * Primitive(원시 타입): number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array ... 나머지 타입 모두 obj
   */

  // number
  const num: number = -5;

  // string
  const str: string = "hello";

  // boolean
  const bool: boolean = true;

  // undefined : 값이 있는지 없는지 결정되지 않았음
  let name: undefined; // ❌
  let age: number | undefined; // union type
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null : 값이 비어있음
  let person: null; // ❌
  let person2: string | null;

  // unknown : ❌ 무슨 타입인지 모름. 모든 타입 들어갈 수 있음. 안쓰는게 좋음
  let notSure: unknown = 0;
  notSure = "Hi";
  notSure = true;

  // any : ❌ 모든 타입을 담을 수 있음. 안쓰는게 좋음
  let anything: any = 0;
  anything = "hello";

  // void : 함수의 return 값이 없을 때 사용. 생략 가능
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // ❌ 변수에 지정시 undecined 밖에 할당 못함 사용 X

  // never : 함수를 return 할 계획이 없음
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
  }

  // object : primitive type 을 제외한 모든 type 가능
  let obj: object = [1, 4]; // array 도 가능 ❌
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "max" });
  acceptSomeObject({ animal: "dog" });
}
