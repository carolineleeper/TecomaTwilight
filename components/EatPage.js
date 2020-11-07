import StallCard from "./StallCard";
import Link from "next/link";

const featuredFoodVendorNames = [
  "The Eatery Tecoma",
  "Proserpina Bakehouse",
  "Babaji's Kitchen",
  "The Dolly Bus",
  "Nevedya",
  "Blacksmith",
];

const EatPage = (props) => {
  const foodVendors = props.stalls.filter((stall) => {
    console.log(stall.name);
    return featuredFoodVendorNames.includes(stall.name);
  });

  return (
    <>
      <h1 className="title">EAT</h1>
      <ul className="galleryContainer">
        {foodVendors.map((stall) => {
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
