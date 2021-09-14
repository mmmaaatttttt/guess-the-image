import { Box } from "@chakra-ui/react";
import { useCallback, useEffect, useMemo } from "react";
import BlockerCell from "./BlockerCell";
import useTimer from "./hooks/useTimer";
import { shuffle } from "./util/random";

function ImageBlocker({
  reveal,
  left,
  width,
  height,
  score,
  hiddenCount,
  setHiddenCount,
  numRows = 8,
  intervalInMS = 1000,
  numCols = 8
}) {
  const widthPerCell = width / numCols;
  const heightPerCell = height / numRows;
  const shuffledIndices = useMemo(
    () => shuffle(Array.from({ length: numRows * numCols }, (_, i) => i)),
    [numRows, numCols]
  );

  const onInterval = useCallback(() => {
    setHiddenCount((oldCount) => oldCount + 1);
  }, []);

  const { start } = useTimer({
    intervalInMS,
    onInterval
  });

  useEffect(() => {
    start();
  }, [start]);

  useEffect(() => {
    if (hiddenCount === numRows * numCols + 1) {
      reveal();
    }
  }, [hiddenCount, numRows, numCols, reveal]);

  useEffect(() => {
    setHiddenCount(0);
  }, [score]);

  return (
    <Box
      position="absolute"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        left: `${left}px`
      }}
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
            transitionTime={intervalInMS / 2000}
          />
        );
      })}
    </Box>
  );
}

export default ImageBlocker;
