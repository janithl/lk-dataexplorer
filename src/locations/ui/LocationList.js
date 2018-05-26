import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Label, Input } from "reactstrap";

import { filterLocations } from "../actions";

export const LocationList = ({
  fetching,
  locations,
  filter,
  onFilterChange
}) => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Locations</h1>
    </header>

    <Form>
      <FormGroup>
        <Label for="locationFilter">Filter</Label>
        <Input
          type="text"
          name="filter"
          id="locationFilter"
          placeholder="Filter Locations"
          value={filter}
          onChange={onFilterChange}
        />
      </FormGroup>
    </Form>

    <p className="App-intro">
      {fetching
        ? "fetching"
        : locations
            .filter(loc =>
              loc
                .getFullName()
                .toUpperCase()
                .includes(filter.toUpperCase())
            )
            .map(loc => <li key={loc.getCode()}>{loc.getFullName()}</li>)}
    </p>
  </div>
);

const mapStateToProps = state => ({
  fetching: state.locations.fetching,
  locations: Object.values(state.locations.locations),
  filter: state.locations.filter
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: e => dispatch(filterLocations(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
