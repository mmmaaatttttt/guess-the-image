import { memo } from "react";
import { Box } from "@chakra-ui/react";

function BlockerCell({ width, height, offsetX, offsetY, hidden, transitionTime }) {
  return (
    <Box
      opacity={hidden ? 0 : 1}
      bg="teal.200"
      position="absolute"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        left: `${offsetX}px`,
        top: `${offsetY}px`,
        transition: `opacity ${transitionTime}s`
      }}
    />
  );
}

export default memo(BlockerCell);
