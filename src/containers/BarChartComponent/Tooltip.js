import React from "react";

export default ({ hoveredBar, scales }) => {
  const { xScale, yScale } = scales;
  const styles = {
    position: "absolute",
    left: `${xScale(hoveredBar.title) - 18}px`,
    top: `${yScale(hoveredBar.value) - 12}px`
  };
  const style2 = {
    color: hoveredBar.color
  };
  return (
    <div className="Tooltip" style={styles}>
      <div className="bar-tool-tip">
        <div>
          <span colSpan="1">X : </span>
          <span style={style2} className="td-data" colSpan="2">
            {hoveredBar.title}
          </span>
        </div>
        <div>
          <span colSpan="1">Y : </span>
          <span style={style2} className="td-data" colSpan="1">
            {hoveredBar.value}
          </span>
        </div>
      </div>
    </div>
  );
};
