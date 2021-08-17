{
  /**
   * Enum : 여러 가지 관련된 상수 값을 한 곳에 모아서 정의
   */

  //Javascript: 상수를 따로 지정하는 방법이 정해져 있지 않아 주로 대문자 변수로 사용함

  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  //Object.freeze : 객체의 키, 값을 변경하지 못하게 고정
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript

  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";

  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Friday;
  day = 10; // compile error 가 발생하지 않음!
  console.log(day);

  let dayOfWeek: DaysOfWeek = "Monday";
  dayOfWeek = "Wednesday";
  console.log(dayOfWeek);
}
