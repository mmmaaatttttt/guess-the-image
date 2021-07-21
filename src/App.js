import { useState } from "react";
import images from "./data/images";
import { shuffle } from "./util/random";
import ImageContainer from "./ImageContainer";

const shuffledImages = shuffle(images);

function App() {
  const [started, setStarted] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);
  const nextImage = () => setImageIdx(oldIdx => oldIdx + 1);

  return started ? (
    <div>
      <ImageContainer {...shuffledImages[imageIdx]} onNext={nextImage} />
      <h3>{shuffledImages[imageIdx].title}</h3>
    </div>
  ) : (
    <button onClick={() => setStarted(true)}>Start Game</button>
  );
}

export default App;
