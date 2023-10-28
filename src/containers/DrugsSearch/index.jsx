import Header from "../../components/Header";
import "./style.css";
import { useDrugsSearch } from "./hooks";

const DrugsSearch = () => {
  const { drugs, handleChange, inputVal, handleSubmit, suggestions, error, navigate } = useDrugsSearch();

  return (
    <div className="drugs__container">
      <Header title="SEARCH DRUGS" />

      <div className="drugs__search">
        <div className="search_container">
          <h5>Search for drugs!</h5>
          <form onSubmit={handleSubmit}>
            <input placeholder="Search" className="drugs__search_input" value={inputVal} onChange={handleChange} />
          </form>
          <ul className="drugs__list_container">
            {drugs.map((drug) =>
              drug.conceptProperties.map((item, index) => (
                <li onClick={() => navigate(`/drugs/${item.name}`, { state: item })} className="drugs__list" key={item.rxcui + index}>
                  {item.name}
                </li>
              ))
            )}
            {suggestions.map((sugg, index) => (
              <li onClick={() => navigate(`/drugs/${sugg}`)} className="drugs__list" key={sugg + index}>
                {sugg}
              </li>
            ))}
          </ul>

          {error ? <span>{error}</span> : null}
        </div>
      </div>
    </div>
  );
};

export default DrugsSearch;
