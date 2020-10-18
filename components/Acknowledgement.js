import Flags from "./Flags.js";
import style from "./Acknowledgement.module.css";

const Acknowledgement = () => {
  return (
    <div className={style.acknowledgement}>
      <p>
        <em>
          We acknowledge the traditional owners of the land we live on, the
          Wurundjeri of the Kulin Nation, their elders, past, present and
          future.
        </em>
      </p>
      <Flags />
    </div>
  );
};

export default Acknowledgement;
