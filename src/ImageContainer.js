import { useState } from "react";
import { Box, Center } from "@chakra-ui/react";
import Image from "./Image";
import ImageBlocker from "./ImageBlocker";
import Footer from "./Footer";

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
    <Center m="0 auto" position="relative">
      {!ended && <ImageBlocker {...dimensions} reveal={reveal} />}
      <Image
        src={src}
        alt={title}
        handleDimensionsChange={handleDimensionsChange}
      />
      <Box
        pos="fixed"
        bottom={0}
        py={5}
        width="100%"
        bg="gray.700"
        color="white"
      >
        {ended ? (
          <Footer
            leftText={title}
            btnText="Select Next Image"
            handleClick={handleNext}
            rightText={bottomText}
          />
        ) : (
          <Footer
            leftText="Guess the movie!"
            btnText="Reveal Answer"
            handleClick={reveal}
            rightText={bottomText}
          />
        )}
      </Box>
    </Center>
  );
}

export default ImageContainer;
