import React from "react";
import { Link } from "react-router-dom";

import { Button } from "reactstrap";

const Home = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to LK DataExplorer</h1>
    </header>
    <p className="App-intro">We will be getting started soon</p>
    <Link to="/locations">
      <Button outline color="danger">
        Danger!
      </Button>
    </Link>
  </div>
);

export default Home;
