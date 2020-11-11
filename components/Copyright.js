const Copyright = () => {
  const year = new Date();
  return <p>&copy; {`${year.getFullYear()}`} Tecoma Twilight</p>;
};

export default Copyright;
