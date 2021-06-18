import React from "react";

const SearchHistory = (props) => {
  var arr = props.history;
  return (
    <ul>
      {arr.map((search, index) => {
        return <li>{search}</li>;
      })}
    </ul>
  );
};
export default SearchHistory;
