import React from "react";
import { Link } from "react-router-dom";

import { DATASETS } from "../constants";

const Home = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to LK DataExplorer</h1>
    </header>
    <p className="App-intro">We will be getting started soon</p>
    <ul>
      {Object.values(DATASETS).map(dataset => (
        <li>
          <Link to={["explore", dataset.id].join("/")}>{dataset.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Home;
