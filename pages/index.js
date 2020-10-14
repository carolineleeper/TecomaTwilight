import SEO from "../components/SEO";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <>
      <SEO title="Coming Soon" />
      <div className="comingSoonContainer">
        <Logo />
        <h1 className="comingSoon">Coming Soon</h1>
        <div className="applyHereContainer">
        <p className="applyHere">Are you an ethical business wanting to feature in this market?</p>
        <a className="applyBtn" href="https://docs.google.com/forms/d/e/1FAIpQLSdMb5r3Vr8q8jMA_9mIYrJriC1u3vZT2dRFi9JfTU1A-B6I2w/viewform?usp=sf_link"><button>Apply Here</button></a>
        </div>
      </div>
    </>
  );
};

export default Home;
