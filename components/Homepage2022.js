import style from "./Homepage2022.module.css";
import HomepageImage from "./HomepageImage";
// import style from "./BuyingGuide.module.css";

const Homepage2022 = () => {
	return (
		<div className={style.homepageContainer}>
			<h1 className="upperCase">Tecoma Twilight is returning in-person in 2022</h1>
			<p className="title">November 20th, 4pm - 8pm</p>
			<HomepageImage
				src="/images/homepage-image.jpg"
				alt="crowds at the tecoma twilight market 2019"
			/>
			<p className="textCenter">
				Offering the best of local, ethical, sustainable traders. Check out some of our previous
				stall holders who have featured in either our physical or online markets.
			</p>
			<p className="upperCase">
				Interested in being a stall holder in 2022? Fill in this{" "}
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLScSDBshbMoXa3eSwP4960G-MMwGmJw-tpsauL2eAguvHb34ug/viewform?usp=sf_link"
					target="_blank"
				>
					application form
				</a>{" "}
				and we'll let you know if you meet our ethical criteria.
			</p>
			{/* <div className={style.buyingGuide}>
				<iframe
					className={style.buyingGuideIframe}
					// sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox"
					// allowFullScreen={true}
					src="https://docs.google.com/forms/d/e/1FAIpQLScSDBshbMoXa3eSwP4960G-MMwGmJw-tpsauL2eAguvHb34ug/viewform?embedded=true"
				></iframe>
			</div> */}
		</div>
	);
};

export default Homepage2022;
