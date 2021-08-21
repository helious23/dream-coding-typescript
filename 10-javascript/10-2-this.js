/**
 * Javascript this
 */

// browser 에서는 global 객체가 window
console.log(this); // window

function simpleFunc() {
  console.log(this);
}
// 함수도 마찬가지?
window.simpleFunc();

console.clear();

// class 안에서는 해당 class
class Counter {
  count = 0;
  //   increase = function () {
  //     console.log(this);
  //   };

  // arrow fn 을 이용하면 bind 해 주지 않아도 연결됨
  // 그 당시 문맥의 this 를 유지함
  increase = () => {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase(); // Counter class

// 변수에 할당하면 this 의 정보를 잃어버림
// global 로 선언한 변수는 window 객체에 등록되지 않음 (함수는 등록됨, var 는 등록됨)
// ex) window.xxx 하면 변수는 나타나지 않음
const caller = counter.increase;
// const caller = counter.increase.bind(counter); // bind 설정 시 Counter class
caller(); // bind 없으면 undefined

// 새로운 class 생성하여 기존 increase 함수를 run 에 할당
class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob class
// Bob class 에서 호출하였으므로...
