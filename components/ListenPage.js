import style from "./ListenPage.module.css";

const ListenPage = () => {
	return (
		<>
			<h1 className="title">Listen</h1>
			<div className={style.textContainer}>
				<p className="upperCase">
					Tecoma Twilight has featured some superb local artists in both our in-person and online
					markets.
				</p>
				<p>
					Through the 'listen while you shop' feature down the bottom of your screen, you can listen
					to them all over again.
				</p>
				<p>
					Appreciating that many of them have had challenging pandemic years, we'd encourage you to
					consider supporting them - by either booking them for an event or buying albums for gifts
					or for your enjoyment. Simply follow the links below and happy shopping!
				</p>
			</div>
		</>
	);
};

export default ListenPage;
