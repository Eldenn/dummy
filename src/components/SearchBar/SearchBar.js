import PropTypes from "prop-types";

import "./SearchBar.css";

function SearchBar({ parentState, handleChange, handleReset }) {
  return (
    <form>
      <input type="text" value={parentState.text} onChange={handleChange} />
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

SearchBar.propTypes = {
  parentState: PropTypes.object,
  handleChange: PropTypes.func,
  handleReset: PropTypes.func,
};

export default SearchBar;
