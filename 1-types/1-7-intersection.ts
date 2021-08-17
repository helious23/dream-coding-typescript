{
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Workder = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Workder) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: "max",
    score: 100,
    employeeId: 1,
    work: () => {},
  });
}
