/**
 * Let's make a game 🕹
 */

let position = { x: 0, y: 0 };
type Direction = "up" | "down" | "left" | "right" | "he";
const move = (direction: Direction) => {
  switch (direction) {
    case "up":
      position.y += 1;
      break;
    case "down":
      position.y -= 1;
      break;
    case "left":
      position.x -= 1;
      break;
    case "right":
      position.x += 1;
      break;
    case "he":
      position.x += 1;
      break;
    default:
      const invalid = direction;
      // 모든 type case 를 switch case 로 다뤘으므로 direction 에는 never type 만 할당될 수 있음.
      throw new Error(`unknown direction ${invalid}`);
  }
};

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
