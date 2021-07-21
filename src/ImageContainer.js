import { useState } from "react";
import Image from "./Image";
import ImageBlocker from "./ImageBlocker";
import "./ImageContainer.css";

function ImageContainer({ src, title }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, left: 0 });

  const handleDimensionsChange = ({ width, height, left }) => {
    setDimensions({ width, height, left});
  }

  return (
    <div className="ImageContainer" >
      <ImageBlocker {...dimensions} />
      <Image src={src} alt={title} handleDimensionsChange={handleDimensionsChange} />
      <h3>{title}</h3>
    </div>
  );
}

export default ImageContainer;
