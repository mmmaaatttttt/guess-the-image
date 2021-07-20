import "./ImageBlocker.css";

function ImageBlocker({ width, height }) {
  return <div className="ImageBlocker" style={{width: `${width}px`, height: `${height}px` }}></div>
}

export default ImageBlocker;