import React from "react";

const Form = (props) => {
  var value = "";
  return (
    <form container="input">
      <input
        type="text"
        alt="Search Bar"
        className="search"
        onChange={(e) => {
          value = e.currentTarget.value;
        }}
      />

      <div className="flex-container">
        <button
          className="btn"
          onClick={() => {
            props.history.append(value);
          }}
        >
          <small className="btn-text">Google Search</small>
        </button>
        <button className="btn">
          <small className="btn-text">I'm Feeling Lucky</small>
        </button>
      </div>
    </form>
  );
};
export default Form;
