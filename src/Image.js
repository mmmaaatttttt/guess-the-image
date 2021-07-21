import { memo, useRef, useEffect, useState } from "react";
import "./Image.css";

function Image({ src, alt, handleDimensionsChange }) {
  const imageRef = useRef(null);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    function handleResize() {
      handleDimensionsChange(imageRef.current.getBoundingClientRect());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleDimensionsChange]);

  const handleLoad = e => {
    handleDimensionsChange(e.target.getBoundingClientRect());
    setHidden(false);
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`Image ${hidden ? "hidden" : ""}`}
      ref={imageRef}
      onLoad={handleLoad}
    />
  );
}

export default memo(Image);
