import SEO from "../components/SEO";
import Video from "../components/Video";

const Home = () => {
  return (
    <>
      <SEO title="Home" />
      <h1>Home</h1>
      <p>
        The perfect pre-Christmas market – promoting living and buying
        ethically.
      </p>
      <p>
        This twilight market supports ethical trading, community empowerment and
        sustainable practices. Spending your money at any of the 60 plus stalls
        will help create positive change locally and globally.
      </p>
      <p>
        With quality, local food vendors and a stellar line up of local
        performers, this festival-like market will be a great community event
        for the whole family.
      </p>
      <Video src="https://www.youtube.com/embed/ZGb6xasktBg" />
    </>
  );
};

export default Home;
