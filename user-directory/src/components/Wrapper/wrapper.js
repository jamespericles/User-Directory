import React from "react";
import "user-directory/src/components/Wrapper/wrapper.css";

function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

export default Wrapper;
