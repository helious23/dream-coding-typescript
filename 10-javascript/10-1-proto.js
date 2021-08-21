const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instnce member level: 만들어지는 constructor fuction 마다 들어있음
  /* this.makeCoffee = (shots) => {
  } */
}

// constructor fn 의 prototype 에 직접 함수 구현
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making...☕️");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

/**
 * prototype 을 이용한 JS 에서 상속
 */

// Constructor Fn 생성
function LatteMachine(milk) {
  this.milk = milk;
}

// Object.create 사용하여 상속 받을 Constructor Fn 의 prototype 할당
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);

// CoffeeMachine 의 makeCoffee 사용 가능
latteMachine.makeCoffee();
