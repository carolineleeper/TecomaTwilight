const getWrappedIndex = (collection, index) => {
  let wrappedIndex = Math.abs(index);
  while (wrappedIndex > collection.length - 1) {
    wrappedIndex -= collection.length;
  }
  return wrappedIndex;
};

const FeaturedStalls = ({ stalls }) => {
  const goLiveDate = new Date("2020-10-13");
  const today = new Date();
  const diffTime = today - goLiveDate;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const stallLeft = stalls[getWrappedIndex(stalls, diffDays - 1)];
  const stallMiddle = stalls[getWrappedIndex(stalls, diffDays)];
  const stallRight = stalls[getWrappedIndex(stalls, diffDays + 1)];

  return (
    <div>
      <p>{stallLeft.storeName}</p>
      <p>{stallMiddle.storeName}</p>
      <p>{stallRight.storeName}</p>
    </div>
  );
};

export default FeaturedStalls;
