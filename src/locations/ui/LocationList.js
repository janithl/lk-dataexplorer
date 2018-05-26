import React from "react";
import { connect } from "react-redux";

export const LocationList = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Locations</h1>
    </header>
  </div>
);

export default connect()(LocationList);
