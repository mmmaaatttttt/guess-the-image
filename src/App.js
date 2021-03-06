import { useState, useMemo } from "react";
import imageData from "./data";
import { shuffle } from "./util/random";
import ImageContainer from "./ImageContainer";
import StartScreen from "./StartScreen";
import EndScreen from "./EndScreen";

function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [started, setStarted] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);
  const nextImage = () => setImageIdx(oldIdx => oldIdx + 1);
  const handleChange = e => {
    setSelectedIdx(+e.target.value);
  }
  const handleStart = () => setStarted(true);
  const { images, label } = imageData[selectedIdx];
  const randomImages = useMemo(() => shuffle(images), [images]);
  const ended = imageIdx === images.length;
  const bottomText = `Image ${imageIdx + 1} of ${images.length}`;

  if (!started)
    return (
      <StartScreen
        handleChange={handleChange}
        handleStart={handleStart}
        options={imageData.map(d => d.label)}
      />
    );
  if (ended) return <EndScreen />;

  return (
    <ImageContainer
      {...randomImages[imageIdx]}
      bottomText={bottomText}
      label={label}
      nextImage={nextImage}
    />
  );
}

export default App;
