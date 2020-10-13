import style from "./StallSearch.module.css";

const StallSearch = (props) => {
  return (
    <div className={style.searchBarContainer}>
      <input
        className={style.searchInput}
        onChange={props.handleInput}
        value={props.search}
        placeholder="&#xF002; Search by store name or keyword"
      />
    </div>
  );
};

export default StallSearch;
