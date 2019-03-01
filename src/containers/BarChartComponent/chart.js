import React, { Fragment, Component } from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import Axes from "./axes";
import data from "./data";
import Bars from "./Bars";
import Tooltip from "./Tooltip";

export default class Chart extends Component {
  constructor() {
    super();
    this.xScale = scaleBand();
    this.yScale = scaleLinear();
    this.state = {
      hoveredBar: null
    };
  }

  render() {
    const margins = { top: 50, right: 20, bottom: 100, left: 60 };
    const svgDimensions = { width: 800, height: 500 };

    const maxValue = Math.max(...data.map(d => d.value));

    const xScale = this.xScale
      .padding(0.5)

      .domain(data.map(d => d.title))
      .range([margins.left, svgDimensions.width - margins.right]);

    const yScale = this.yScale
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top]);

    return (
      <Fragment>
        <svg width={svgDimensions.width} height={svgDimensions.height}>
          <Axes
            scales={{ xScale, yScale }}
            margins={margins}
            svgDimensions={svgDimensions}
          />
          <Bars
            scales={{ xScale, yScale }}
            margins={margins}
            data={data}
            maxValue={maxValue}
            svgDimensions={svgDimensions}
            onMouseOverCallback={datum => this.setState({ hoveredBar: datum })}
            onMouseOutCallback={datum => this.setState({ hoveredBar: datum })}
          />
        </svg>
        {this.state.hoveredBar ? (
          <Tooltip
            hoveredBar={this.state.hoveredBar}
            scales={{ xScale, yScale }}
          />
        ) : null}
      </Fragment>
    );
  }
}
