import React from "react";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to LK DataExplorer</h1>
      </header>
      <p className="App-intro">We will be getting started soon</p>
    </div>
  </Provider>
);

export default App;
