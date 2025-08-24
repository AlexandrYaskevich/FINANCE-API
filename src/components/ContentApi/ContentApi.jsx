import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import style from './style.module.css';

const ContentApi = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={style.content}>
    <h1 className="head">Новости из жизни финансов</h1>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://video-preview.s3.yandex.net/QAMPXAIAAAA.mp4"
      />
     <button className={style.button}  onClick={() => setIsPlaying((p) => !p)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default ContentApi;