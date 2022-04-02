import React, { Component, Fragment } from "react";
import { getSensors } from "../services/sensorService";
// import { paginate } from "../utils/paginate";
// import Pagination from "./pagination";
import SensorsTable from "./sensorsTable";

class Sensors extends Component {
  state = {
    sensors: [],
  };

  async componentDidMount() {
    const { data : sensors } = await getSensors();
    this.setState({ sensors: sensors.sensors });
  }

  render() {
    const {  sensors } = this.state;

    return (
        <SensorsTable
          sensors={sensors}
        />   
    );
  }
}

export default Sensors;
