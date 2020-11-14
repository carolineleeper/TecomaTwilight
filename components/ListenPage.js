import style from "./ListenPage.module.css";

const ListenPage = () => {
  return (
    <>
      <h1 className="title">Listen</h1>
      <div className={style.textContainer}>
        {/* {musicians.map((musician) => {
          return (
            <>
              <p className={style.name}>{musician.name}</p>
              <p>{musician.description}</p>
            </>
          );
        })} */}
      </div>
    </>
  );
};

export default ListenPage;
