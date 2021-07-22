import { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Text,
  SimpleGrid,
  GridItem
} from "@chakra-ui/react";
import Image from "./Image";
import ImageBlocker from "./ImageBlocker";
import "./ImageContainer.css";

function ImageContainer({ src, title, nextImage, bottomText }) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    left: 0
  });
  const [ended, setEnded] = useState(false);
  const reveal = () => setEnded(true);

  const handleDimensionsChange = ({ width, height, left }) => {
    setDimensions({ width, height, left });
  };

  const handleNext = () => {
    setEnded(false);
    nextImage();
  };

  return (
    <div className="ImageContainer">
      {!ended && <ImageBlocker {...dimensions} reveal={reveal} />}
      <Image
        src={src}
        alt={title}
        handleDimensionsChange={handleDimensionsChange}
      />
      <Box pos="fixed" bottom={5} width="100%">
        {ended ? (
          <SimpleGrid columns={[1, null, 3]} alignItems="center">
            <Heading size="lg">{title}</Heading>
            <Button onClick={handleNext}>Select Next Image</Button>
            <Text>{bottomText}</Text>
          </SimpleGrid>
        ) : (
          <SimpleGrid columns={[1, null, 3]} alignItems="center">
            <GridItem colStart={2}>
              <Button onClick={reveal} width={"100%"} colStart={2}>
                Reveal Answer
              </Button>
            </GridItem>
            <Text>{bottomText}</Text>
          </SimpleGrid>
        )}
      </Box>
    </div>
  );
}

export default ImageContainer;
