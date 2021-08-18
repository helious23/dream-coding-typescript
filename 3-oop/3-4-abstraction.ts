/**
 * Encapsulation : member variable 을 외부에서 접근하지 못하게 함. 정보 은닉
 * Abstraction : class 내의 method 를 외부에서 접근하지 못하게 하여 사용 편의성을 갖게 함.
 *               필요시 encapsulation 을 통해 abstraction 을 만들기도 함
 */

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    // makeCoffee(shots:number): CoffeeCup;
    makeCoffee: (shots: number) => CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee: (shots: number) => CoffeeCup;
    fillCoffeeBeans: (beans: number) => void;
    clean: () => void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    // CoffeeMachine class 는 CoffeeMaker interface 를 구현 (implement)
    private static BEANS_GRAMM_PER_SHOP: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
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

      /*
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOP) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOP;
      return {
        shots,
        hasMilk: false,
      };
      */
    }
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  // maker 는 CoffeeMachine 으로 생성: CoffeeMaker, CommercialCoffeeMaker  둘 다 implement
  // AmateurUser 일 경우는 CoffeeMaker, ProBarista 일 경우는 CommercialCoffeemaker
  // 동일한 CoffeeMachine 을 받았지만 interface 가 다르므로 사용할 수 있는 method 가 달라짐
  amateur.makeCoffee();
  pro.makeCoffee();
}
