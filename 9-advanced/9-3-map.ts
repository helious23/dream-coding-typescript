{
  /**
   * Mapped Type
   */

  type Video = {
    title: string;
    author: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P];
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: "tiger",
  };
  animal.name = "cat";

  const videoOp: Optional<Video> = {};

  const readOnlyVideo: ReadOnly<Video> = {
    author: "Max",
    title: "Good Movie",
  };

  //   readOnlyVideo.author = 'jessie'

  type Nullable<T> = { [P in keyof T]: T[P] | null };

  const obj2: Nullable<Video> = {
    title: null, // string | null
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
