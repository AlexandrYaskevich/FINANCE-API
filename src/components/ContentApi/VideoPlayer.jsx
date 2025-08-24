import { useEffect, useRef } from "react";
import style from './style.module.css';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  }, [isPlaying]);

  return( 
    <div className={style.video}>
        <video ref={ref} src={src} loop playsInline />
    </div>
  )
}

export default VideoPlayer;