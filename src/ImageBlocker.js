import { useMemo, useState, useCallback } from "react";
import BlockerCell from "./BlockerCell";
import useTimer from "./hooks/useTimer";
import { shuffle } from "./util/random";
import "./ImageBlocker.css";

function ImageBlocker({
  left,
  width,
  height,
  numRows = 6,
  numCols = 6,
  durationInMS = 60000
}) {
  const widthPerCell = width / numCols;
  const heightPerCell = height / numRows;
  const shuffledIndices = useMemo(
    () => shuffle(Array.from({ length: numRows * numCols }, (_, i) => i)),
    [numRows, numCols]
  );
  const [hiddenCount, setHiddenCount] = useState(0);
  const onInterval = useCallback(() => {
    setHiddenCount(oldCount => oldCount + 1);
  }, []);
  const intervalInMS = durationInMS / (numRows * numCols);

  useTimer({ durationInMS, intervalInMS, onInterval });

  return (
    <div
      className="ImageBlocker"
      style={{ width: `${width}px`, height: `${height}px`, left: `${left}px` }}
    >
      {shuffledIndices.map((randomIdx, i) => {
        const rowIdx = Math.floor(i / numCols);
        const colIdx = i % numCols;
        return (
          <BlockerCell
            key={`${rowIdx}-${colIdx}`}
            height={heightPerCell}
            width={widthPerCell}
            offsetX={colIdx * widthPerCell}
            offsetY={rowIdx * heightPerCell}
            hidden={randomIdx < hiddenCount}
          />
        );
      })}
    </div>
  );
}

export default ImageBlocker;
