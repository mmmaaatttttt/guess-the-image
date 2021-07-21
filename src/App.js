import { useState } from "react";
import images from "./data/images";
import { shuffle } from "./util/random";
import ImageContainer from "./ImageContainer";

const shuffledImages = shuffle(images);

function App() {
  const [started, setStarted] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);
  const nextImage = () => setImageIdx(oldIdx => oldIdx + 1);
  const ended = imageIdx === shuffledImages.length;

  if (!started)
    return <button onClick={() => setStarted(true)}>Start Game</button>;
  if (ended) return <h1>You finished the game!</h1>;

  return (
    <>
      <ImageContainer {...shuffledImages[imageIdx]} nextImage={nextImage} />
      <p>
        Image {imageIdx + 1} of {shuffledImages.length}
      </p>
    </>
  );
}

export default App;
