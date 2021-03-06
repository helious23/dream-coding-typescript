{
  // Array
  const fruits: string[] = ["π", "π"];
  const scores: Array<number> = [1, 3, 4];
  // readonly : object μ λΆλ³μ±μ λ³΄μ₯. tuple literal type μλ§ μ μ©μν¬ μ μμ. readonly Array<number> β
  function printArray(fruits: readonly string[]) {}

  // Tuple : μλ‘ λ€λ₯Έ type μ ν¨κ» κ°μ§ μ μλ Array
  // -> interface, type alias, class λ‘ λμ²΄νμ¬ μ°λκ² κ°λμ±μ΄ λμ
  let student: [string, number];
  student = ["age", 19];
  student[0]; // name
  student[1]; // 19
  const [name, age] = student; // object destructuring
  // const [age, setAge] = useState(0) : tuple μ¬μ©μ μ
}
