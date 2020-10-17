import SEO from "../components/SEO";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <>
      <SEO title="Thank You" />
      <div className="comingSoonContainer">
        <Logo />
        <p className="thanksText">
          Thank you for your submission!
          <br />
          We'll be in touch soon!
        </p>
      </div>
    </>
  );
};

export default Home;
