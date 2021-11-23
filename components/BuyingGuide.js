import style from "./BuyingGuide.module.css";

const BuyingGuide = () => {
	return (
		<div>
			<h1 className="title">Tecoma Twilight Ethical Gift Buying Guide 2021</h1>
			<div className={style.buyingGuide}>
				<iframe
					className={style.buyingGuideIframe}
					sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox"
					// allowFullScreen={true}
					src="https://e.issuu.com/embed.html?d=tecoma_twilight_ethical_gift_buying_guide&u=tecomatwilight"
				></iframe>
			</div>
		</div>
	);
};

export default BuyingGuide;
