import Flags from "./Flags.js";
import style from "./Acknowledgement.module.css";

const Acknowledgement = () => {
  return (
    <div className={style.acknowledgement}>
      <p>
        <em>
          We acknowledge the Traditional Owners of the lands and waters of
          Australia and the Torres Strait.
        </em>
      </p>
      <p>
        <em>
          We respect all First Nations people - their customs and their beliefs.
          We also pay our respects to Elders past and present and future with
          particular acknowledgement to the Wurundjeri people of the Kulin
          nation, the traditional owners of the lands where our market is
          located.
        </em>
      </p>
      <Flags />
    </div>
  );
};

export default Acknowledgement;
