import style from "./Homepage2023.module.css";
import HomepageImage from "./HomepageImage";

const Homepage2023 = () => {
	return (
		<div className={style.homepageContainer}>
			<h1 className="upperCase">Tecoma Twilight is returning in 2023</h1>
			<p className="title">November 19th, 4pm - 8pm</p>
			<HomepageImage
				src="/images/homepage-image.png"
				alt="crowds at the tecoma twilight market 2019"
			/>
			<p className="textCenter">
				Offering the best of local, ethical, sustainable traders. Check out some of our previous
				stall holders who have featured in either our physical or online markets.
			</p>
			<p className="upperCase">
				Interested in being a stall holder in 2023? Fill in this{" "}
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSc88ma9B9JAwvKctzzDjNdExv9zAlaDUKGqigps2XJWfvHKgQ/viewform?usp=sf_link"
					target="_blank"
				>
					application form
				</a>{" "}
				and we'll let you know if you meet our ethical criteria.
			</p>
		</div>
	);
};

export default Homepage2023;
