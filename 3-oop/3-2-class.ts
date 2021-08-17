{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOP: number = 7; // static variable: class level 로 지정. class level 에서 함께 공유되는 variable
    coffeeBeans: number = 0; // member variable: instance (object) level 로 지정. object 마다 새로 만들어져야 되는 variable. this 필요

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      // static method : 새로운 클래스 객체를 생성하지 않고 호출 가능한 method
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOP) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOP;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(10);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(7);
  console.log(maker3);
}
