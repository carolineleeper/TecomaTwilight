import StallCard from "./StallCard";
import Link from "next/link";

const EatPage = (props) => {
  return (
    <>
      <h1 className="title">EAT</h1>
      <ul className="galleryContainer">
        {props.stalls.map((stall) => {
          return (
            <Link key={stall.filename} href={`stalls/${stall.filename}`}>
              <a className="stallLink">
                <StallCard stall={stall} />
              </a>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default EatPage;
