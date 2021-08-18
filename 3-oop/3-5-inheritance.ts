{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    // makeCoffee(shots:number): CoffeeCup;
    makeCoffee: (shots: number) => CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOP: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("Value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...🧼");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOP) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOP;
    }

    private preheat(): void {
      console.log("heating up...🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, public readonly serialNumber: string) {
      super(coffeeBeans); // 자식 class 에서 constructor 를 사용할 경우에는 부모 constructor 를 super() 로 받아와야됨
      // parameter 도 그대로 받아와야 됨
    }
    private steamMilk(): void {
      console.log(`Steaming some milk...🥛`);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // super: 부모 class 에 있는 method 사용
      this.steamMilk();
      return {
        ...coffee,
        shots,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(23);
  const lattemachine = new CafeLatteMachine(23, "ssss");
  const coffee = lattemachine.makeCoffee(1);
  console.log(coffee);
  console.log(lattemachine.serialNumber);
}
