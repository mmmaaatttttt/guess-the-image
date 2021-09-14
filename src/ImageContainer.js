import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import Footer from "./Footer";
import Image from "./Image";
import ImageBlocker from "./ImageBlocker";

function ImageContainer({
  src,
  title,
  nextImage,
  reveal,
  ended,
  setEnded,
  label,
  bottomText,
  scoreText,
  guess,
  setGuess,
  wrongGuess,
  isCorrect,
  setIsCorrrect,
  score,
  start,
  hiddenCount,
  setHiddenCount,
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
      <Flex flex={1} alignItems="center">
        {!ended && (
          <ImageBlocker
            {...dimensions}
            reveal={reveal}
            score={score}
            start={start}
            hiddenCount={hiddenCount}
            setHiddenCount={setHiddenCount}
            nextImage={nextImage}
          />
        )}

        <Image
          src={src}
          alt={title}
          handleDimensionsChange={handleDimensionsChange}
        />
      </Flex>
      <Footer
        isCorrect={isCorrect}
        leftText={leftText}
        btnText={btnText}
        handleGuess={handleGuess}
        title={title}
        guess={guess}
        wrongGuess={wrongGuess}
        setGuess={setGuess}
        handleClick={handleClick}
        rightText={bottomText}
        scoreText={scoreText}
      />
    </Flex>
  );
}

export default ImageContainer;
