import SEO from "./SEO";
import BackButton from "./BackButton";
import style from "./MusicianPage.module.css";
import ReactMarkdown from "react-markdown";

const MusicianPage = (props) => {
  console.log(props);
  return (
    <>
      <SEO title={props.musician.name} />
      <BackButton />
      <h2 className="title">{props.musician.name}</h2>
      <div className={style.musicianProfile}>
        <div className={style.imageContainer}>
          <img src={props.musician.image} alt={`${props.musician.name}`} />
        </div>
        <ReactMarkdown
          className={style.musicianInfo}
          source={props.musician.content}
        />
        {/* <div
          className={style.musicianInfo}
          dangerouslySetInnerHTML={{ __html: props.musician.content }}
        /> */}
      </div>
    </>
  );
};

export default MusicianPage;
