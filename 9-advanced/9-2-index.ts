{
  /**
   * Type Alias 에서 사용할 수 있는 Index type
   */

  const obj = {
    name: "max",
  };
  obj.name; // max
  obj["name"]; // max

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // string
  const text: Name = "tiger";

  type Gender = Animal["gender"]; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age | 'gender'
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "max",
    gender: "male",
  };
}
