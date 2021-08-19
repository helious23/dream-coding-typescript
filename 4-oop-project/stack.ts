interface Stack {
  readonly size: number;
  push: (value: string) => void;
  pop: () => string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  // 일반적으로는 file 의 size 를 정함
  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }
  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
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

const stack = new StackImpl(5);
stack.push("Max 1");
stack.push("Jessie 2");
stack.push("Jenny 3");
stack.push("Lucy 4");

while (stack.size !== 0) {
  console.log(stack.pop());
}
stack.pop();
