import style from "./InlineImage.module.css";

const InlineImage = (props) => {
  const align = props.align;
  return (
    <div className={style.imageContainer}>
      <img src={props.src} />
      <p className="upperCase">
        Let us help you navigate the amazing world{" "}
        <span className="emphasise">without lockdown</span>. Take a few gentle
        steps this festive season with us by attending our online market.
      </p>
    </div>
  );
};

export default InlineImage;
