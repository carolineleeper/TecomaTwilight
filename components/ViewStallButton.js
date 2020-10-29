import style from "./ViewStallButton.module.css";
import { useRouter } from "next/router";

const ViewStallButton = (props) => {
  const router = useRouter();
  return (
    // <form action={`stalls/${props.filename}`} method="get">
    <button
      className={style.viewStallButton}
      onClick={() => router.push(`stalls/${props.filename}`)}
      type="button"
    >
      View
    </button>
    // </form>
  );
};

export default ViewStallButton;
