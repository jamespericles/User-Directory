import React, { Component } from "react";
import "user-directory/src/components/Header/header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>
          Currently you can filter by names or utilize the search bar to find
          specific, totally real, employees!
        </p>
      </div>
    );
  }
}
