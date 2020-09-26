import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./pages/index";
import NavBar from "./components/NavBar/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper/index";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Wrapper>
          <Route exact path="/" component={Index} />
        </Wrapper>
        <Footer />
      </>
    </Router>
  );
}

export default App;
