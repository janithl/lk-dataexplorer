import React from "react";
import { connect } from "react-redux";

import LocationItem from "./LocationItem";
import Filter from "../../common/ui/Filter";
import Loader from "../../common/ui/Loader";

import { filterLocations } from "../actions";

const searchLocations = (locations, search) => {
  const searchRegex = new RegExp(search, "ig");
  return locations.filter(
    loc =>
      [loc.getFullName(), loc.getFullName("si"), loc.getFullName("ta")]
        .join(" ")
        .search(searchRegex) > -1
  );
};

export const LocationList = ({
  fetching,
  locations,
  filterValue,
  onFilterChange
}) => (
  <div>
    <h1>Locations</h1>

    <Filter
      filterValue={filterValue}
      onFilterChange={onFilterChange}
      placeholder="Filter Locations"
    />

    <Loader loading={fetching}>
      {!fetching &&
        searchLocations(locations, filterValue).map(loc => (
          <LocationItem key={loc.getCode()} location={loc} />
        ))}
    </Loader>
  </div>
);

const mapStateToProps = state => ({
  fetching: state.locations.fetching,
  locations: Object.values(state.locations.locations),
  filterValue: state.locations.filter
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: e => dispatch(filterLocations(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
