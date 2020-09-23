import React, { useState, useEffect } from "react";
import Child from "./components/Child";
import "./App.css";

const postArray = [1, 2, 3, 4, 5];

function App() {
  const [userName, setUserName] = useState("Reginald");

  useEffect(() => {
    console.log(userName);
  }, [userName]);

  const handleChange = (e) => {
    let { value } = e.target;
    setUserName(value);
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <Child name={userName} setUserName={setUserName}></Child> */}
        {postArray.map((post) => (
          <Child name={post} key={post} />
        ))}
        <h2>{userName}</h2>
        <input type="text" onChange={handleChange} value={userName}></input>
      </header>
    </div>
  );
}

export default App;
