import { useState } from "react";
import images from "./data/images";
import { shuffle } from "./util/random";
import ImageContainer from "./ImageContainer";
import StartScreen from "./StartScreen";
import EndScreen from "./EndScreen";

const shuffledImages = shuffle(images);

function App() {
  const [started, setStarted] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);
  const nextImage = () => setImageIdx(oldIdx => oldIdx + 1);
  const handleClick = () => setStarted(true);
  const ended = imageIdx === shuffledImages.length;
  const bottomText = `Image ${imageIdx + 1} of ${shuffledImages.length}`;

  if (!started) return <StartScreen handleClick={handleClick} />;
  if (ended) return <EndScreen />;
  
  return (
    <ImageContainer
      {...shuffledImages[imageIdx]}
      nextImage={nextImage}
      bottomText={bottomText}
    />
  );
}

export default App;
