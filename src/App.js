import { useState } from "react";
import images from "./data/images";
import { shuffle } from "./util/random";
import ImageContainer from "./ImageContainer"

const shuffledImages = shuffle(images);

function App() {
  const [started, setStarted] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);

  return (
    <div>
      <ImageContainer {...shuffledImages[imageIdx]} />
      <h3>{shuffledImages[imageIdx].title}</h3>
    </div>
  );
}

export default App;
