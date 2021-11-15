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
				This Year’s Tecoma Twilight Ethical Gift Buying Guide Launches 19th November!
			</p>
		</div>
	);
};

export default InlineImage;
