import { useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import Image from "./Image";
import ImageBlocker from "./ImageBlocker";
import Footer from "./Footer";

function ImageContainer({
  src,
  title,
  nextImage,
  reveal,
  ended,
  setEnded,
  label,
  bottomText,
  guess,
  setGuess,
  isCorrect,
  setIsCorrrect,
  score,
  handleGuess
}) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    left: 0
  });

  const handleDimensionsChange = ({ width, height, left }) => {
    setDimensions({ width, height, left });
  };

  const handleNext = () => {
    setEnded(false);
    setIsCorrrect(false);
    nextImage();
  };

  let leftText = `Guess the ${label}!`;
  let btnText = "Reveal Answer";
  let handleClick = reveal;

  if (ended) {
    leftText = title;
    btnText = "Select Next Image";
    handleClick = handleNext;
  }

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="space-evenly"
      position="relative"
      minH="100vh"
      bg="gray.200"
    >
      <Heading padding="10px" size="lg">
        Your score is: {score}
      </Heading>
      <Flex flex={1} alignItems="center">
        {!ended && (
          <ImageBlocker
            {...dimensions}
            reveal={reveal}
            score={score}
            nextImage={nextImage}
          />
        )}

        <Image
          src={src}
          alt={title}
          handleDimensionsChange={handleDimensionsChange}
        />
      </Flex>
      {isCorrect ? <Heading> Boom! You got it!!</Heading> : null}
      <Footer
        leftText={leftText}
        btnText={btnText}
        handleGuess={handleGuess}
        title={title}
        guess={guess}
        setGuess={setGuess}
        handleClick={handleClick}
        rightText={bottomText}
      />
    </Flex>
  );
}

export default ImageContainer;
