{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "max";
  const address: Text = "Australia";

  type Num = number;

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "max",
    age: 30,
  };

  /**
   * String Literal Types : type 을 특정 type 으로 지정할 수 있음
   */
  type Name = "name";
  let maxName: Name;
  maxName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
}
