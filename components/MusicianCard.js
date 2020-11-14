import style from "./MusicianCard.module.css";

const MusicianCard = (props) => {
  return (
    <>
      <div className={style.musicianCard}>
        <div className={style.name}>{props.musician.name}</div>
        <div className={style.stallImageContainer}>
          <img src={props.musician.image} alt={`${props.musician.name}`} />
        </div>
      </div>
    </>
  );
};

export default MusicianCard;
