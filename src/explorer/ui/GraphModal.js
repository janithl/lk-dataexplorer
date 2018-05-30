import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TabContent,
  TabPane
} from "reactstrap";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineSeries
} from "react-vis";

const selected = [
  "y-2007",
  "y-2008",
  "y-2009",
  "y-2010",
  "y-2011",
  "y-2012",
  "y-2013",
  "y-2014",
  "y-2015",
  "y-2016",
  "y-2017"
];

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
                <XYPlot height={500} width={500}>
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  {Object.values(this.props.dataset)
                    .slice(0, 10)
                    .map(d => (
                      <LineSeries
                        data={selected.map(key => ({
                          x: key.substr(2),
                          y: d[key]
                        }))}
                      />
                    ))}
                </XYPlot>
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

const mapStateToProps = state => ({
  dataset: state.explorer.dataset
});

export default connect(mapStateToProps)(GraphModal);
