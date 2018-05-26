import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";

import store from "./store";
import HomeScreen from "./common/ui/Home";
import LocationListScreen from "./locations/ui/LocationList";
import ExplorerScreen from "./explorer/ui/Explorer";

const App = () => (
  <Provider store={store}>
    <Router>
      <Container className="main-container">
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/locations" component={LocationListScreen} />
        <Route path="/explore/:id" component={ExplorerScreen} />
      </Container>
    </Router>
  </Provider>
);

export default App;
