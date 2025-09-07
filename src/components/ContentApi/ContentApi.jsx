import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import style from "./style.module.css";
import ListNews from "./ListNews";

const ContentApi = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [changeV, setChangeV] = useState(
    "https://video-preview.s3.yandex.net/QAMPXAIAAAA.mp4"
  );
  function ChangeVideo(src) {
    setChangeV(src);
  }

  return (
    <div className={style.content}>
      <h1 className={style.head}>"Новости из жизни финансов"</h1>
      <div>
        <VideoPlayer isPlaying={isPlaying} src={changeV} />
        <button
          className={style.button}
          onClick={() => setIsPlaying((p) => !p)}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <ListNews ChangeVideo={ChangeVideo} />
    </div>
  );
};

export default ContentApi;





