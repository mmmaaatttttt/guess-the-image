import { useState } from "react";
import { Flex } from "@chakra-ui/react";
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

  let leftText = "Guess the movie!";
  let btnText = "Reveal Answer";
  let handleClick = reveal;

  if (ended) {
    leftText = title;
    btnText = "Select Next Image";
    handleClick = handleNext;
  }

  return (
    <Flex m="0 auto" position="relative">
      {!ended && <ImageBlocker {...dimensions} reveal={reveal} />}
      <Image
        src={src}
        alt={title}
        handleDimensionsChange={handleDimensionsChange}
      />
      <Footer
        leftText={leftText}
        btnText={btnText}
        handleClick={handleClick}
        rightText={bottomText}
      />
    </Flex>
  );
}

export default ImageContainer;
