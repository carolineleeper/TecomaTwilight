import SEO from "../components/SEO";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <>
      <SEO title="Thank You" />
      <h1 className="title">Thank You!</h1>
      <p className="upperCase">
        Thank you for your submission!
        <br />
        We'll be in touch soon!
      </p>
    </>
  );
};

export default Home;
