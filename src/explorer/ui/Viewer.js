import React from "react";
import { connect } from "react-redux";
import { Button, Table, UncontrolledTooltip } from "reactstrap";

import { fetchDataset } from "../actions";

const ViewerRow = ({ item, metaKey, locations }) =>
  metaKey === "district" ? (
    <td>
      <a href="#" id={item.id}>
        {item[metaKey]}
      </a>
      <UncontrolledTooltip target={item.id}>
        {locations[item[metaKey]].getFullName()}
        {" — "}
        {locations[item[metaKey]].getFullName("si")}
        {" — "}
        {locations[item[metaKey]].getFullName("ta")}
      </UncontrolledTooltip>
    </td>
  ) : (
    <td>{item[metaKey]}</td>
  );

const Viewer = ({ metadata, dataset, locations, onRefresh }) => {
  const filteredMeta = Object.values(metadata).filter(meta => !meta.optional);

  return (
    <div>
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
                    <ViewerRow
                      key={meta.key}
                      metaKey={meta.key}
                      item={item}
                      locations={locations}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        )}

      <Button onClick={onRefresh}>Refresh</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  metadata: state.explorer.metadata,
  dataset: state.explorer.dataset,
  locations: state.locations.locations
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRefresh: () => dispatch(fetchDataset(ownProps.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
