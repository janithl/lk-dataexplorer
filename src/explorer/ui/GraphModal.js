import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TabContent,
  TabPane
} from "reactstrap";

class GraphModal extends React.Component {
  state = {
    visible: false,
    activeTab: "settings"
  };

  toggle = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  switchTabs = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    return (
      <div>
        <Button color="primary" outline size="sm" onClick={this.toggle}>
          View Graphs
        </Button>
        <Modal isOpen={this.state.visible} toggle={this.toggle} size="lg">
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="settings">
              <ModalHeader toggle={this.toggle}>Graph Settings</ModalHeader>
              <ModalBody>
                <h4>Tab 1 Contents</h4>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  outline
                  onClick={() => this.switchTabs("graph")}
                >
                  View Graph
                </Button>
              </ModalFooter>
            </TabPane>
            <TabPane tabId="graph">
              <ModalHeader toggle={this.toggle}>Graph</ModalHeader>
              <ModalBody>
                <h4>Tab 2 Contents</h4>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  outline
                  onClick={() => this.switchTabs("settings")}
                >
                  Edit Settings
                </Button>
                <Button color="secondary" outline onClick={this.toggle}>
                  Close
                </Button>
              </ModalFooter>
            </TabPane>
          </TabContent>
        </Modal>
      </div>
    );
  }
}

export default GraphModal;
