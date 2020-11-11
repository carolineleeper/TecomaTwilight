import style from "./InlineImage.module.css";
import Image from "next/image";

const InlineImage = (props) => {
  return (
    <div className={style.imageContainer}>
      <Image
        className={style.imageComponent}
        src={props.src}
        layout="fill"
        priority={true}
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
