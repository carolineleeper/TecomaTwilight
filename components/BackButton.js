import style from "./BackButton.module.css";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  return (
    <button className={style.backButton} onClick={() => router.back()}>
      Go back
    </button>
  );
};

export default BackButton;
