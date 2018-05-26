import React from "react";
import { Card, CardHeader, CardBody, CardText } from "reactstrap";

const Loader = ({ loading, children }) => (
  <div>
    {loading ? (
      <Card>
        <CardHeader tag="h3">Loading</CardHeader>
        <CardBody>
          <CardText>Your content is almost here!</CardText>
        </CardBody>
      </Card>
    ) : (
      children
    )}
  </div>
);

export default Loader;
