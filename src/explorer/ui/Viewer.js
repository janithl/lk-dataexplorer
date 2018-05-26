import React from "react";
import { connect } from "react-redux";
import { Button, Table } from "reactstrap";

import { fetchDataset } from "../actions";

const Viewer = ({ explorer, onRefresh }) => (
  <div>
    <Button onClick={onRefresh}>Refresh</Button>

    <Table striped>
      <tbody>
        {explorer &&
          Object.values(explorer).map(item => (
            <tr key={item["polling-division"]}>
              <th scope="row">{item["polling-division"]}</th>
              {Object.values(item).map(cell => <td>{cell}</td>)}
            </tr>
          ))}
      </tbody>
    </Table>
  </div>
);

const mapStateToProps = state => ({ explorer: state.explorer.electoral });

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRefresh: id => dispatch(fetchDataset(ownProps.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
