import Link from "next/link";

const NavItem = (props) => {
  return (
    <Link href={props.url}>
      <a>{props.title}</a>
    </Link>
  );
};

export default NavItem;
