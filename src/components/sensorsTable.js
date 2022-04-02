import React from "react";
import Gauge from "./gauge";
import LiquidGauge from "./liquidGauge";
import {EnglishToPersian} from '../utility/convertor';

const SensorsTable = (props) => {
  const { sensors } = props;
  return (
    <div className="sensor">
      {sensors.map((sensor) => 
      <div key={sensor.sensorid} className="sensor__container">
        <div className="sensor__container--items">
          {sensor.sensortype === 1 ? <Gauge value = {sensor.sensordata} /> : <LiquidGauge value = {sensor.sensordata} /> }
          <div className="sensor__text">
              {EnglishToPersian(sensor.sensorname)}
          </div>
        </div>
      </div>
      
     )}
    </div>
  );
};

export default SensorsTable;
