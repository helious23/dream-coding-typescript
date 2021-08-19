{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee: (shots: number) => CoffeeCup;
  }

  // abstract class: 상속을 시키기 위한 부모 class. 그 자체로 object 를 만들 수 없음.
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOP: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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
    // protected abstract: 상속된 자식 class 마다 다르게 사용할 method
    // 추상적인 method 이므로 부모 class 에서 구현하면 안됨
    protected abstract extract(shots: number): CoffeeCup;
    // 부모 class 에서 protected 이므로 자식에서는 protected 또는 public

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, public readonly serialNumber?: string) {
      super(coffeeBeans);
    }
    private steamMilk(): void {
      console.log(`Steaming some milk...🥛`);
    }
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CafeLatteMachine(16),
    new SweetCoffeeMaker(16),
    new CafeLatteMachine(16),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log("------------------------------------------------------------");
    machine.makeCoffee(1);
  });
}
