import style from "./Video.module.css";

const Video = (props) => {
  return (
    <div className={style.videoContainer}>
      <div className={style.responsiveVideoContainer}>
        <iframe
          width="100%"
          height="315"
          src={props.src}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
