import style from "./style.module.css";

const listVideo = [
  {
    id: 1,
    text: "Название видео",
    src: "https://video-preview.s3.yandex.net/13V1WwIAAAA.mp4",
    about: "тут краткое описание, в пару строчек - про что и о чем видео",
  },
  {
    id: 3,
    text: "Название видео",
    src: "https://video-preview.s3.yandex.net/J8OdWQIAAAA.mp4", 
    about: "тут краткое описание, в пару строчек - про что и о чем видео",
  },
  {
    id: 4,
    text: "Название видео",
    src: "https://video-preview.s3.yandex.net/a2gfVwIAAAA.mp4",
    about: "тут краткое описание, в пару строчек - про что и о чем видео",
  },
  {
    id: 5,
    text: "Название видео",
    src: "https://video-preview.s3.yandex.net/t7A0GwIAAAA.mp4",
    about: "тут краткое описание, в пару строчек - про что и о чем видео",
  },
];
function ListNews({ ChangeVideo }) {
  return (
    <div>
      <ul className={style.listblock}>
        {listVideo &&
          listVideo.map((v) => (
            <li key={v.id} className={style.vidblock}>
              <h1>{v.text}</h1>
              <video
                className={style.listVideo}
                src={v.src}
                loop
                playsInline
                width="300"
                controls
              />
              <p>{v.about}</p>
              <button
                className={style.bchange}
                onClick={() => ChangeVideo(v.src)}
              >
                перейти к просмотру
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ListNews;