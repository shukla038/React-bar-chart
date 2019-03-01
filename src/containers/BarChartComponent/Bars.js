import React, { Component } from "react";
export default class Bars extends Component {
  state = {
    hoverState: false
  };

  render() {
    const { scales, margins, data, svgDimensions } = this.props;
    const { xScale, yScale } = scales;
    const { height } = svgDimensions;
    const bars = data.map(datum => (
      <rect
        ref={node => {
          this.node = node;
        }}
        key={datum.title}
        x={xScale(datum.title)}
        y={yScale(datum.value)}
        height={height - margins.bottom - scales.yScale(datum.value)}
        width={xScale.bandwidth()}
        className="rect-dom-element"
        fill={datum.color}
        onMouseOver={() => this.props.onMouseOverCallback(datum)}
        onMouseOut={() => this.props.onMouseOutCallback(null)}
      />
    ));

    return <g>{bars}</g>;
  }
}
