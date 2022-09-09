import style from "./DonatePage.module.css";

const DonatePage = () => {
	return (
		<div className={style.donateContainer}>
			<h1 className={style.donateTitle}>Donate</h1>
			<p>
				We would love you to consider supporting{" "}
				<a href="https://www.foothillscare.org.au/" target="_blank">
					Foothills Community Care
				</a>{" "}
				in the lead up to Christmas.
			</p>
			<p>
				Foothills supports many local Dandenong Ranges families and individuals throughout the year
				with meals and food support. This year alone they have distributed over 25,000 meals to
				locals in need of an extra hand up. Each Christmas they host a special Christmas Day Lunch
				for people who would otherwise be on their own.
			</p>
			<p className="upperCase">
				<strong>
					Last year we raised over $1,000 in support and we’d love to do the same again this year!
				</strong>
			</p>
			<p>You can support them in one of two ways:</p>
			<ol>
				<li>
					<p>
						<strong>Donate gifts towards the Foothills Giving Tree.</strong> Simply purchase your
						gift and leave it under the Giving Tree at our market, or drop it in to Foothills at
						Upwey Baptist Church before Tuesday 13th.
					</p>
				</li>
				<li>
					<p>
						<strong>
							Donate funds to them to help their support of vulnerable and isolated people this
							Christmas.
						</strong>{" "}
						All donations over $2 are tax-deductible and can be made securely via{" "}
						<a
							className={style.darkLink}
							href="https://www.foothillscare.org.au/donate/"
							target="_blank"
						>
							https://www.foothillscare.org.au/donate/
						</a>
						.
					</p>
				</li>
			</ol>
		</div>
	);
};

export default DonatePage;
