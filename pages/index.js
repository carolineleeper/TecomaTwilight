import SEO from "../components/SEO";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <>
      <SEO title="Coming Soon" />
      <div className="comingSoonContainer">
        <Logo />
        <h1 className="comingSoon">Coming Soon</h1>
      </div>
    </>
  );
};

export default Home;
