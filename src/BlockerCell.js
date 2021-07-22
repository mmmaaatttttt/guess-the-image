import { memo } from "react";
import { Box } from "@chakra-ui/react";

function BlockerCell({ width, height, offsetX, offsetY, hidden }) {
  return (
    <Box
      opacity={hidden ? 0 : 1}
      bg="aqua"
      border="1px solid aqua"
      position="absolute"
      transition="opacity 1s"
      className={`BlockerCell ${hidden ? "hidden" : ""}`}
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
