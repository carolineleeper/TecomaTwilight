import style from "./HomepageImage.module.css";

const HomepageImage = (props) => {
	return (
		<div className={style.imageContainer}>
			<img src={props.src} alt={props.alt} />
		</div>
	);
};

export default HomepageImage;
