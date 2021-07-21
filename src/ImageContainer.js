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

  const handleDimensionsChange = ({ width, height, left }) => {
    setDimensions({ width, height, left });
  };

  return (
    <div className="ImageContainer">
      <ImageBlocker {...dimensions} />
      <Image
        src={src}
        alt={title}
        handleDimensionsChange={handleDimensionsChange}
      />
      {ended ? (
        <div>
          <h3>{title}</h3>
          <button onClick={nextImage}>Select Next Image</button>
        </div>
      ) : (
        <button onClick={() => setEnded(true)}>Reveal Answer</button>
      )}
    </div>
  );
}

export default ImageContainer;
