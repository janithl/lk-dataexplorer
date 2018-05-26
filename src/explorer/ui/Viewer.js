import React from "react";
import { connect } from "react-redux";
import { Button, Table } from "reactstrap";

import { fetchDataset } from "../actions";

const Viewer = ({ metadata, dataset, onRefresh }) => {
  const filteredMeta = Object.values(metadata).filter(meta => !meta.optional);

  return (
    <div>
      <Button onClick={onRefresh}>Refresh</Button>

      {metadata &&
        dataset && (
          <Table responsive striped size="sm">
            <thead>
              <tr>
                {filteredMeta.map(meta => <th key={meta.key}>{meta.value}</th>)}
              </tr>
            </thead>
            <tbody>
              {Object.values(dataset).map(item => (
                <tr key={item.id}>
                  {filteredMeta.map(meta => (
                    <td key={meta.key}>{item[meta.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        )}
    </div>
  );
};

const mapStateToProps = state => ({
  metadata: state.explorer.metadata,
  dataset: state.explorer.dataset
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRefresh: () => dispatch(fetchDataset(ownProps.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
