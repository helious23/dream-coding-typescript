{
  /*
  //Javascript ❌
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // Typescript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Javascript ❌
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Typescript ✨
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  */

  // 최신 Javascript 문법 ✨ => Typescript 사용 가능
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  printName("Max");
  printName("Jessie", undefined);

  // Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...rest: number[]): number {
    return rest.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 6));
}
