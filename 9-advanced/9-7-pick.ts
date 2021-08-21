{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Pick<Video, "id" | "title">;

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
