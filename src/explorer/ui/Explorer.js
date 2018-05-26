import React from "react";
import { Card, CardText, CardTitle } from "reactstrap";

import { DATASETS } from "../../common/constants";

const Explorer = ({ match }) =>
  DATASETS[match.params.id] ? (
    <div>
      <h1>{DATASETS[match.params.id].title}</h1>
    </div>
  ) : (
    <Card body inverse color="danger">
      <CardTitle>Error!</CardTitle>
      <CardText>We cannot find that dataset.</CardText>
    </Card>
  );

export default Explorer;
