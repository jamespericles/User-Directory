import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>User Directory</h1>
        <p>
          Currently you can filter by name or utilize the search bar to find
          specific, totally real, employees!
        </p>
      </div>
    );
  }
}
