import { memo, useRef, useEffect, useState } from "react";
import "./Image.css";

function Image({ src, alt, setDimensions }) {
  const imageRef = useRef(null);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    function handleResize() {
      const { width, height } = imageRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setDimensions]);

  const handleLoad = e => {
    const { width, height } = e.target.getBoundingClientRect();
    setHidden(false);
    setDimensions({ width, height });
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
