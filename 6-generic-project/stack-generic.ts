interface Stack<T> {
  readonly size: number;
  push: (value: T) => void;
  pop: () => T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;

  // 일반적으로는 file 의 size 를 정함
  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }
  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    if (this.head == null) {
      // javascript 에서 head 가 null or undefined 일 경우가 있으므로 느슨한 null check 해야 됨.
      // this.head === undefined 라고 하면 null 일 경우 통과함
      throw new Error("Stack is empty");
    }
    const node = this.head; // pop 할 node 를 담음
    this.head = node.next; // head 에는 이전 node 를 담음
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<string>(10);
stack.push("Max 1");
stack.push("Jessie 2");
stack.push("Jenny 3");
stack.push("Lucy 4");

while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>(10);
stack2.push(123);
stack2.push(456);
stack2.push(789);

while (stack2.size !== 0) {
  console.log(stack2.pop());
}
