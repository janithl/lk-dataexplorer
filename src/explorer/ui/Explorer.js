import React from "react";
import { Row, Col, Card, CardText, CardTitle } from "reactstrap";

import Viewer from "./Viewer";
import MetaControl from "./MetaControl";
import GraphModal from "./GraphModal";
import { DATASETS } from "../../common/constants";

const Explorer = ({ match }) =>
  DATASETS[match.params.id] ? (
    <div>
      <Row className="align-items-center">
        <Col xs="8">
          <h1>{DATASETS[match.params.id].title}</h1>
        </Col>
        <Col xs="2">
          <GraphModal />
        </Col>
        <Col xs="2">
          <MetaControl />
        </Col>
      </Row>

      <Viewer id={match.params.id} />
    </div>
  ) : (
    <Card body inverse color="danger">
      <CardTitle>Error!</CardTitle>
      <CardText>We cannot find that dataset.</CardText>
    </Card>
  );

export default Explorer;
