import { useState } from "react";
import { Heading, Button } from "@chakra-ui/react";
import images from "./data/images";
import { shuffle } from "./util/random";
import ImageContainer from "./ImageContainer";

const shuffledImages = shuffle(images);

function App() {
  const [started, setStarted] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);
  const nextImage = () => setImageIdx(oldIdx => oldIdx + 1);
  const ended = imageIdx === shuffledImages.length;
  const bottomText = `Image ${imageIdx + 1} of ${shuffledImages.length}`;

  if (!started)
    return <Button onClick={() => setStarted(true)}>Start Game</Button>;
  if (ended) return <Heading>You finished the game!</Heading>;

  return (
    <ImageContainer
      {...shuffledImages[imageIdx]}
      nextImage={nextImage}
      bottomText={bottomText}
    />
  );
}

export default App;
