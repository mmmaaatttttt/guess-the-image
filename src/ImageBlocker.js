import BlockerCell from "./BlockerCell";
import "./ImageBlocker.css";

function ImageBlocker({ width, height, numRows = 6, numCols = 6 }) {
  const widthPerCell = width / numCols;
  const heightPerCell = height / numRows;
  return (
    <div
      className="ImageBlocker"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {Array.from({ length: numRows * numCols }, (_, i) => {
        const rowIdx = Math.floor(i / numCols);
        const colIdx = i % numCols;
        return (
          <BlockerCell
            key={`${rowIdx}-${colIdx}`}
            height={heightPerCell}
            width={widthPerCell}
            offsetX={colIdx * widthPerCell}
            offsetY={rowIdx * heightPerCell}
          />
        );
      })}
    </div>
  );
}

export default ImageBlocker;
