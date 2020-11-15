import style from "./ListenPage.module.css";

const ListenPage = () => {
  return (
    <>
      <h1 className="title">Listen</h1>
      <div className={style.textContainer}>
        <p>
          We are SO lucky to have a vibrant and alive music scene in the
          Dandenong Ranges and surrounds. Such a cornucopia of talent and
          generosity from professional artists who live and work here. So many
          of them support local community events, often giving their time and
          skill for little or no money while working to support families and
          ploughing their earnings back into the local economy.
        </p>
        <p>
          Sadly, many have gone from gigs galore to no gigs over this extended
          period of Covid-19.
        </p>
        <p className="upperCase">
          Tecoma Ethical Twilight Market offers you the opportunity to support
          and thank them by listening and paying for their services. You can
          book them for an event or buy albums for pressies for the Festival
          Season. Follow the links and Happy shopping!
        </p>
      </div>
    </>
  );
};

export default ListenPage;
