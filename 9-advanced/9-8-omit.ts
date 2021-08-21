{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
  // K 에는 아무 key 나 전달 가능
  // keyof T 가 전달받은 K 에 있다면 never 로 전달되어 Pick -> 사용하지 않음
  // keyof T 가 전달받은 K 에 없다면 T 로 전달되어 Pick -> 그대로 사용

  type Exclude<T, U> = T extends U ? never : T;
  // Exclude: U 가 T 에 있다면 never, 없으면 T 리턴

  type VideoMetadata = Omit<Video, "url" | "data">;

  const getVideo = (id: string): Video => {
    return {
      id,
      title: "video",
      url: "https://...",
      data: "byte-data...",
    };
  };

  const getVideoMetadata = (id: string): VideoMetadata => {
    return {
      id,
      title: "video",
    };
  };
}
