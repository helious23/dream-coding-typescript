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
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    // CoffeeMachine class 는 CoffeeMaker interface 를 구현
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

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(2);
  maker.fillCoffeeBeans(12);
  maker.makeCoffee(2); // private 을 통해 사용자가 사용할 수 있는 method 를 제한

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(2);
  maker2.fillCoffeeBeans(12); // CoffeeMaker interface 에는 fillCoffeeBeans 가 정의되어 있지 않으므로 사용 불가
  maker2.makeCoffee(2);
}
