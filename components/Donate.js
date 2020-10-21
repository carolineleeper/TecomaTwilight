import { Router } from "next/router";
import style from "./Donate.module.css";
import { useRouter } from "next/router";

const Donate = () => {
  const router = useRouter();
  return (
    // <form action="/donate" method="get" target="_blank">
    <button
      className={style.donateButton}
      onClick={() => router.push("/donate")}
      type="button"
    >
      Donate
    </button>
    // </form>
  );
};

export default Donate;
