{
  /**
   * Type vs Interface 비교
   */

  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // Object 생성 가능 ⭐️
  const obj1: PositionType = {
    x: 1,
    y: 2,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 2,
    z: 3,
  };

  // Class 생성 가능 ⭐️
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    z: number;
    x: number;
    y: number;
  }

  // Extends 가능 ⭐️
  // interface: inheritance 를 통하여 확장 가능
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  // type : intersection (&) 사용하여 type 확장 가능
  type ZPositionType = PositionType & { z: number };

  // Merge: interface 만 가능, type ❌
  interface PositionInterface {
    z: number;
  }

  //   type PositionType {
  //   }

  // Computed properties: Type 만 가능, interface ❌
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person["name"]; // string

  type NumberType = number;
  type Direction = "left" | "right";
}
