import SEO from "../../components/SEO";
import ListenPage from "../../components/ListenPage";
import MusicianCard from "../../components/MusicianCard";
import Link from "next/link";
import matter from "gray-matter";
import fs from "fs";

const Listen = (props) => {
  return (
    <>
      <SEO title="Listen" />
      <ListenPage />
      <ul className="galleryContainer">
        {props.musicians.map((musician) => {
          return (
            <Link
              key={musician.filename}
              href={`musicians/${musician.filename}`}
            >
              <a>
                <MusicianCard musician={musician} />
              </a>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export const getStaticProps = () => {
  const directory = `${process.cwd()}/musicians`;
  const rawFilenames = fs.readdirSync(directory);

  const musicians = rawFilenames.map((filename) => {
    const rawFileContent = fs
      .readFileSync(`${directory}/${filename}`)
      .toString();
    const { data, content } = matter(rawFileContent);
    return { ...data, filename: filename.replace(".md", ""), content };
  });

  return { props: { musicians } };
};

export default Listen;
