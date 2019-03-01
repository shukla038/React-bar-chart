import React from "react";
import Chart from "./chart";

export default class Barchart extends React.Component {
  render() {
    return (
      <div className="col-8 barchart--wrapper mx-auto">
        <Chart />
      </div>
    );
  }
}
