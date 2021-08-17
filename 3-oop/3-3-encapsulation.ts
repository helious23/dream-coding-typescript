{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public : default. 따로 작성하지 않으면 다 public
  // private : 클래스 외부에서 접근 X
  // protected : 외부에서는 접근 X, 상속받은 class 에서만 접근 가능

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOP: number = 7; // 외부에서 접근 할 필요
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      // constroctor 를 private 으로 만들어 항상 static method 를 사용할 수 있게 함
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans); // 커피 머신을 만들때 처음 커피콩 세팅
    }

    fillCoffeeBeans(beans: number) {
      // 커피콩을 추가하는 method
      if (beans < 0) {
        throw new Error("Value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
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

  const maker = CoffeeMaker.makeMachine(2);
  console.log(maker);
  maker.fillCoffeeBeans(11);
  console.log(maker.makeCoffee(2));
}
