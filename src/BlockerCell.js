import { memo } from "react";
import "./BlockerCell.css";

function BlockerCell({ width, height, offsetX, offsetY }) {
  return (
    <div
      className="BlockerCell"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        left: `${offsetX}px`,
        top: `${offsetY}px`
      }}
    />
  );
}

export default memo(BlockerCell);
