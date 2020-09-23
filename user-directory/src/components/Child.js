import React from "react";

const Child = ({ name, setUserName }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>Child Component</h2>
    </div>
  );
};

export default Child;
