import { useState } from "react";
import Image from "./Image";
import ImageBlocker from "./ImageBlocker";
import "./ImageContainer.css";

function ImageContainer({ src, title }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  return (
    <div className="ImageContainer" >
      <ImageBlocker {...dimensions} />
      <Image src={src} alt={title} setDimensions={setDimensions} />
    </div>
  );
}

export default ImageContainer;
