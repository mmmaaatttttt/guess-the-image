import { useMemo, useState, useCallback, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import BlockerCell from "./BlockerCell";
import useTimer from "./hooks/useTimer";
import { shuffle } from "./util/random";

function ImageBlocker({
  reveal,
  left,
  width,
  height,
  numRows = 4,
  numCols = 4,
  intervalInMS = 1500
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

  const { start } = useTimer({
    intervalInMS,
    onInterval
  });

  useEffect(() => {
    if (hiddenCount === numRows * numCols + 1) {
      reveal();
    }
  }, [hiddenCount, numRows, numCols, reveal]);

  useEffect(() => {
    start();
  }, [start]);

  return (
    <Box position="absolute"
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
    </Box>
  );
}

export default ImageBlocker;
