const Copyright = () => {
  const date = new Date();
  const year = date.getFullYear();
  return <p>&copy; {`${year}`} Tecoma Twilight</p>;
};

export default Copyright;
