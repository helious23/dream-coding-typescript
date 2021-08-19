interface Employee {
  pay: () => void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 리턴하는 함수는 ❌
function payBax(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// T extends interface: Geieric 을 사용하지만 지정한 interface 를 확장한 type 만 사용하게 함
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const max = new FullTimeEmployee();
const jessie = new PartTimeEmployee();

max.workFullTime();
jessie.workPartTime();

// const maxAfterPay = pay(max);
// const jessueAfterPay = pay(jessie);
// maxAfterPay.workFullTime();

const obj = {
  name: "max",
  age: 20,
};

const obj2 = {
  animal: "🐧",
};

const getValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

console.log(getValue(obj, "name")); // max
console.log(getValue(obj, "age")); // 20

console.log(getValue(obj2, "animal")); // 🐧
