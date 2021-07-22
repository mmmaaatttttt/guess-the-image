import { useState } from "react";
import Image from "./Image";
import ImageBlocker from "./ImageBlocker";
import "./ImageContainer.css";

function ImageContainer({ src, title, nextImage }) {
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
  }

  return (
    <div className="ImageContainer">
      {!ended && <ImageBlocker {...dimensions} reveal={reveal} />}
      <Image
        src={src}
        alt={title}
        handleDimensionsChange={handleDimensionsChange}
      />
      {ended ? (
        <div>
          <h3>{title}</h3>
          <button onClick={handleNext}>Select Next Image</button>
        </div>
      ) : (
        <button onClick={reveal}>Reveal Answer</button>
      )}
    </div>
  );
}

export default ImageContainer;
