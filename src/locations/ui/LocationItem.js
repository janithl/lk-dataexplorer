import React from "react";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

const LocationItem = ({ location }) => (
  <ListGroupItem>
    <ListGroupItemHeading>{location.getFullName()}</ListGroupItemHeading>
    <ListGroupItemText>
      {location.getFullName("si")} — {location.getFullName("ta")}
    </ListGroupItemText>
  </ListGroupItem>
);

export default LocationItem;
