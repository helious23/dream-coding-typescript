{
  // Array
  const fruits: string[] = ["🍅", "🍌"];
  const scores: Array<number> = [1, 3, 4];
  // readonly : object 의 불변성을 보장. tuple literal type 에만 적용시킬 수 있음. readonly Array<number> ❌
  function printArray(fruits: readonly string[]) {}

  // Tuple : 서로 다른 type 을 함께 가질 수 있는 Array
  // -> interface, type alias, class 로 대체하여 쓰는게 가독성이 높음
  let student: [string, number];
  student = ["age", 19];
  student[0]; // name
  student[1]; // 19
  const [name, age] = student; // object destructuring
  // const [age, setAge] = useState(0) : tuple 사용의 예
}
