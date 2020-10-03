import SEO from "../components/SEO";
import { useState } from "react";
import Link from "next/link";
import fs from "fs";

const Stalls = (props) => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const filteredStalls = () => {
    const filtered = props.filenames.filter((filename) => {
      return filename.includes(search);
    });
    return filtered;
  };

  return (
    <>
      <SEO title="Stalls" />
      <p>This is the list of stalls we have!</p>

      <input onChange={handleInput} value={search} />
      <p>Your search is: {search}</p>

      <ul>
        {filteredStalls().map((file) => {
          return (
            <li key={file}>
              <Link href={`stalls/${file}`}>
                <a>{file}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const getStaticProps = () => {
  const directory = `${process.cwd()}/stalls`;
  const rawFilenames = fs.readdirSync(directory);

  const filenames = rawFilenames.map((filename) => {
    return filename.replace(".md", "");
  });

  return { props: { filenames } };
};

export default Stalls;
