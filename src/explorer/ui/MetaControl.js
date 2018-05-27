import React from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";

import { toggleVisibility } from "../actions";

class MetaControl extends React.Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return (
      this.props.metadata.length > 0 && (
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle outline caret size="sm">
            Select Columns
          </DropdownToggle>
          <DropdownMenu>
            {this.props.metadata.map(meta => (
              <DropdownItem
                key={meta.key}
                active={!meta.optional}
                onClick={() => this.props.toggleVisibility(meta.key)}
              >
                {meta.value}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </ButtonDropdown>
      )
    );
  }
}

const mapStateToProps = state => ({
  metadata: Object.values(state.explorer.metadata)
});

const mapDispatchToProps = dispatch => ({
  toggleVisibility: key => dispatch(toggleVisibility(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(MetaControl);
