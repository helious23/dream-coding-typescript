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
  maker.fillCoffeeBeans(12);
  // console.log(maker.makeCoffee(2));

  class User {
    // private firstName: string;
    // private lastName: string;
    // getter 사용하여 firstName lastName 변경 사항을 적용.
    // 그냥 constructor 에 this.fullName = `${this.firstName} ${this.lastName}` 하면 firstName 변경 시 반영되지 않음
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;

    get age(): number {
      return this.internalAge; // member 변수로 바로 return 도 가능
    }

    set age(num: number) {
      if (num < 0) {
        // 유효성 검사도 가능
      }
      this.internalAge = num;
    }

    // constructor 변수 앞에 public or private 으로 지정하면 member 변수로 만들고 constructor 에서 다시 할당하지 않아도 됨
    constructor(public firstName: string, private lastName: string) {
      // this.firstName = firstName;
      // this.lastName = lastName;
    }
  }

  const user = new User("Steve", "Jobs");
  console.log(user.fullName); // Steve Jobs
  user.firstName = "Max"; // getter 는 함수로 표현되어 있지만 member 변수처럼 바로 접근해야 됨
  console.log(user.fullName); // Max Jobs

  user.age = 6; // setter 호출하여 member 변수의 값 재할당
  console.log(user.age); // 6
}
