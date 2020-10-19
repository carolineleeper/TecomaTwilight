import SEO from "../components/SEO";
import Ethics from "../components/Ethics";
import Criteria from "../components/Criteria";
import Donate from "../components/Donate";
import InlineImage from "../components/InlineImage";

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
  "20km Tecoma radius",
  "refugee advocacy",
  "support under 25 yo’s",
];

const About = () => {
  return (
    <>
      <SEO title="About" />
      <InlineImage src="/images/DSC_0161.jpg" align="imageRight" />
      <div className="aboutText">
        <p>
          We want to share another wonderful ethical event promoting{" "}
          <span className="emphasise">local businesses</span>. To keep you safe
          and happy we have decided to go online in 2020. Grab a coffee or chai
          and some food from a local business, sit down with us and do your gift
          shopping. We will even provide you with a playlist of{" "}
          <span className="emphasise">local music</span>.
        </p>
        <p className="upperCase">
          Ethical shopping includes a multitude of research and decision making.
          We at Tecoma Twilight Online Market will be your{" "}
          <span className="emphasise">Ethical Directory</span>.
        </p>
        <p className="textCenter">
          We have resourced stall holders that meet one or more of the
          following:
        </p>
        <Ethics />
        <p>
          We think ethical shopping can also include these specific aspects:
        </p>
        <div className="divCenter">
          <Criteria criteria={criteria} />
        </div>
        {/* <ul>
            <li>vegan</li>
            <li>plastic free</li>
            <li>certified organic</li>
            <li>waste free</li>
            <li>plant based</li>
            <li>carbon neutral</li>
            <li>support female empowerment</li>
            <li>support First Nations</li>
            <li>social enterprise</li>
            <li>20km Tecoma radius</li>
            <li>refugee advocacy</li>
            <li>support under 25 yo’s</li>
          </ul> */}
        <p className="upperCase">
          You can shop anytime you like by contacting the stallholders and
          ordering your gifts.{" "}
          <span className="emphasise">
            Payment will be direct to the stall holder
          </span>
          , just like in any market.
        </p>
        <p>
          As a special treat we invite you to buy something extra to{" "}
          <span className="emphasise">donate</span> to the Hope in the Hills
          Giving Tree. Simply order your gift and drop it at Tecoma Uniting
          Church, 1566 Burwood Highway, Tecoma on Tuesday December 15th.
        </p>
        <p className="textCenter">
          If you are unable to do this, we invite you to donate by clicking the
          donate button below.
          <br />
          <br />
          <Donate />
        </p>
      </div>
    </>
  );
};

export default About;
