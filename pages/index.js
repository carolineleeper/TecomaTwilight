import SEO from "../components/SEO";

const Home = () => {
  return (
    <>
      <SEO title="Home" />
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

      <div
        className="fb-page"
        data-href="https://www.facebook.com/TecomaTwilightEthicalMarket"
        data-tabs="timeline"
        data-width="500"
        data-height=""
        data-small-header="false"
        data-adapt-container-width="false"
        data-hide-cover="false"
        data-show-facepile="false"
      >
        <blockquote
          cite="https://www.facebook.com/TecomaTwilightEthicalMarket"
          class="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/TecomaTwilightEthicalMarket">
            Tecoma Twilight Ethical Market
          </a>
        </blockquote>
      </div>
    </>
  );
};

export default Home;
