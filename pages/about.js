import SEO from "../components/SEO";
import Ethics from "../components/Ethics";
import Criteria from "../components/Criteria";
import Donate from "../components/Donate";
import InlineImage from "../components/InlineImage";
import Link from "next/link";

const criteria = [
	"vegan",
	"plastic free",
	"certified organic",
	"waste free",
	"plant based",
	"carbon neutral",
	"support female empowerment",
	"support First Nations",
	"social enterprise",
	"< 20km Tecoma radius",
	"refugee advocacy",
];

const About = () => {
	return (
		<>
			<SEO title="About" />
			<h1 className="title">About</h1>
			{/* <InlineImage src="/images/DSC_0161.jpg" align="imageRight" /> */}
			<div className="aboutText">
				<p>
					To keep us all safe and happy we have decided to once again go online for our market in
					2021. So grab yourself a drink and maybe some delicious food from one of our{" "}
					<Link href="/eat">
						<a>local businesses</a>
					</Link>
					, and do all your gift shopping here. We’ve made it even easier for you to give good gifts
					this year with our curated Ethical Gift Buying Guide which launches on November 19th. Sign
					up on the home page to be the first to receive it when it launches.
				</p>
				<p className="upperCase">
					Ethical shopping can be challenging and time consuming. So allow the Tecoma Twilight
					Ethical Market to make things much simpler by highlighting only local and ethical
					businesses who meet one or more of the following criteria:
				</p>
				<Ethics />
				<p className="textCenter">
					This site will also allow you to focus your shopping around the ethical priorities most
					important to you!
				</p>
				<p className="textCenter">These may include:</p>
				<div className="divCenter">
					<Criteria criteria={criteria} />
				</div>
				<p className="upperCase">
					So take a stroll through this virtual market and then click on each stall holder to be
					taken to their website. Payment will be direct to the stall holder, just like at any
					market.
				</p>
				<p>
					And why not consider not only purchasing good gifts, but giving a gift! Foothills
					Community Care supports many local Dandenong Ranges families and individuals throughout
					the year with meals and food support. Each Christmas they host a special Christmas Day
					Lunch for people who would otherwise be on their own.
				</p>
				<p className="textCenter">
					This year you are invited to donate towards the Foothills Community Care Christmas Appeal.
					You can do this in one of two ways:
				</p>
				<p className="textBox">
					Donate gifts towards the Foothills Giving Tree. These gifts will go towards their
					Christmas care-packages to local families in need of some extra support this Christmas.
					Simply order your gift and drop it at Tecoma Uniting Church, 1566 Burwood Highway, Tecoma
					before Tuesday December 15th.
				</p>
				<p className="textBox">
					Donate funds to them to help their support of vulnerable and isolated people this
					Christmas. All donations over $2 are tax-deductible and can be made securely via the
					Donate button above.
				</p>
				<p className="upperCase">
					Thank you for supporting these wonderful businesses, and for sharing the love through
					ethical gifts this year!
				</p>
				<p>
					Tecoma Twilight is an initiative of the Tecoma Uniting Church in collaboration with a host
					of community groups and other key members of the surrounding community.
				</p>
			</div>
		</>
	);
};

export default About;
