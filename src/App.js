import { useMemo, useState } from "react";
import imageData from "./data";
import EndScreen from "./EndScreen";
import ImageContainer from "./ImageContainer";
import StartScreen from "./StartScreen";
import { shuffle } from "./util/random";

function App() {
  const [hiddenCount, setHiddenCount] = useState(0);
  const [ended, setEnded] = useState(false);
  const [wrongGuess, setWrongGuess] = useState(1);
  const [isCorrect, setIsCorrrect] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [guess, setGuess] = useState("");
  const [started, setStarted] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);
  const reveal = () => {
    setEnded(true);
    setWrongGuess(1);
    setGuess("");
  };

  const nextImage = () => setImageIdx((oldIdx) => oldIdx + 1);
  const handleChange = (e) => {
    setSelectedIdx(+e.target.value);
  };
  const handleGuess = (val, target) => {
    const targetLower = target.toLowerCase();
    const valLower = val.toLowerCase();
    setGuess(val);

    if (valLower === targetLower) {
      setScore((score) => score + 1);
      setWrongGuess(1);
      setIsCorrrect(true);
      reveal();
    }
    if (valLower !== targetLower && wrongGuess < 3) {
      setWrongGuess((wrongGuess) => wrongGuess + 1);
    }

    if (wrongGuess >= 3) {
      setWrongGuess(1);
      setEnded(true);
      setIsCorrrect(false);
      setHiddenCount(0);
    }
  };
  const handleStart = () => setStarted(true);
  const { images, label } = imageData[selectedIdx];
  const randomImages = useMemo(() => shuffle(images), [images]);
  const gameEnded = imageIdx === images.length;
  const bottomText = `Image ${imageIdx + 1} of ${images.length}`;
  const scoreText = `Score: ${score}/${images.length}`;

  if (!started)
    return (
      <StartScreen
        handleChange={handleChange}
        handleStart={handleStart}
        options={imageData.map((d) => d.label)}
      />
    );
  if (gameEnded) return <EndScreen score={score} images={images} />;

  return (
    <ImageContainer
      {...randomImages[imageIdx]}
      bottomText={bottomText}
      scoreText={scoreText}
      label={label}
      reveal={reveal}
      ended={ended}
      isCorrect={isCorrect}
      setIsCorrrect={setIsCorrrect}
      setEnded={setEnded}
      guess={guess}
      wrongGuess={wrongGuess}
      setWrongGuess={setWrongGuess}
      setGuess={setGuess}
      score={score}
      hiddenCount={hiddenCount}
      setHiddenCount={setHiddenCount}
      handleGuess={handleGuess}
      nextImage={nextImage}
    />
  );
}

export default App;
