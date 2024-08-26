import style from "./Homepage.module.css";
import HomepageImage from "./HomepageImage";

const Homepage = () => {
	return (
		<div className={style.homepageContainer}>
			<h1 className="upperCase">Tecoma Twilight is returning in 2024</h1>
			<p className="title">Sunday November 17th, 4pm - 8pm</p>
			<HomepageImage
				src="/images/homepage-image.png"
				alt="crowds at the tecoma twilight market 2019"
			/>
			<p className="textCenter">
				Offering the best of local, ethical, sustainable traders. Check out some of our previous
				stall holders who have featured in either our physical or online markets.
			</p>
			<p className="upperCase">
				Interested in being a stall holder in 2024? Fill in this{" "}
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSdidiMigbtVqZQjPCJqif46e1EfTlrNJ_trsIMlgigm-3Xu5w/formResponse"
					target="_blank"
				>
					application form
				</a>{" "}
				and we'll let you know if you meet our ethical criteria.
			</p>
		</div>
	);
};

export default Homepage;
