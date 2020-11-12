import style from "./InlineImage.module.css";

const InlineImage = (props) => {
  return (
    <div className={style.imageContainer}>
      <img
        className={style.imageComponent}
        src={props.src}
        alt="crowds at the tecoma twilight market 2019"
      />
      <p className="upperCase">
        Welcome to our virtual market – promoting living and buying ethically.
        Here you will find the ethical and sustainable businesses of the hills –
        all in one place!
      </p>
    </div>
  );
};

export default InlineImage;
