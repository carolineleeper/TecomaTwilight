import SEO from "../components/SEO";
import Logo from "../components/Logo";

const ClickCollect = () => {
  return (
    <>
      <SEO title="Click and Collect" />
      <Logo />
      <h1 className="title">Click and Collect Guide</h1>
      <div className="collectText">
        <p>
          Tecoma Uniting will be the collection point for participating stores.
          We are only offering limited times for this service. They are:
        </p>
        <ul>
          <li>Tuesday 9am – 5pm</li>
          <li>Friday 9am – 5pm</li>
          <li>Wednesday 7pm – 8pm</li>
        </ul>

        <p>
          These are the times both for the drop off of items and the collection
          of items. Items will be stored safely in a separate locked office for
          collection.{" "}
        </p>

        <p className="upperCase">
          <strong>What you need to know:</strong>
        </p>
        <ul>
          <li>
            All payment needs to be completed or arranged prior to collection as
            no money is being handled at the church.
          </li>
          <li>
            Receipts/invoices need to be arranged by you (either emailed or
            included in the packaged item/s)
          </li>
          <li>
            Item/s must be dropped to the church wrapped or bagged with
            <ul>
              <li>Your business name and the</li>
              <li>Purchaser’s name</li>
            </ul>
          </li>
          <li>
            If the buyers goods are not there for collection, responsibility
            moves to you to arrange collection.
          </li>
        </ul>

        <p>
          <strong>IMPORTANT:</strong>
          <br />
          For each separate transaction (i.e. one per client/purchaser), you
          will need to fill out{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfWkyYfWRurwr41Y5xWs_W3LrbVehKEa3EATrfuUWtjE4e4qA/viewform?usp=sf_link"
            target="_blank"
          >
            this form
          </a>{" "}
          to ensure the details are at the church office for pickup.
        </p>

        <p className="upperCase">
          <strong>Information for purchasers:</strong>
        </p>
        <p>
          <em>
            This needs to be communicated by you to those utilising the Click
            and Collect service for your products.
          </em>
        </p>

        <p>
          The collection point is Tecoma Uniting – 1566 Burwood Highway, Tecoma
          3160.
          <br />
          The church office number is: (03) 9754 2177
        </p>

        <p>The limited collection times for this service are:</p>
        <ul>
          <li>Tuesday 9am – 5pm</li>
          <li>Friday 9am – 5pm</li>
          <li>Wednesday 7pm – 8pm</li>
        </ul>

        <p>
          You will need to go to the clearly marked foyer window with some ID
          during one of those times.
        </p>
      </div>
    </>
  );
};

export default ClickCollect;
