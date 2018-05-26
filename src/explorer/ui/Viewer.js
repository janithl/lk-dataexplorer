import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

import { fetchDataset } from "../actions";

const Viewer = ({ id, onRefresh }) => (
  <Button onClick={onRefresh(id)}>Refresh</Button>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onRefresh: id => dispatch(fetchDataset(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
