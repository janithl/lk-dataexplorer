import React from "react";
import { Form, FormGroup, Input } from "reactstrap";

const Filter = ({ filterValue, onFilterChange, placeholder = "" }) => (
  <Form onSubmit={e => e.preventDefault()}>
    <FormGroup>
      <Input
        type="text"
        placeholder={placeholder}
        value={filterValue}
        onChange={onFilterChange}
      />
    </FormGroup>
  </Form>
);

export default Filter;
