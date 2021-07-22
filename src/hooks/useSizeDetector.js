import { useEffect, useRef } from "react";

const useSizeDetector = (elRef, onSizeChange) => {
  const observer = useRef(
    new ResizeObserver(([element]) => {
      const sizeInfo = element.target.getBoundingClientRect();
      onSizeChange(sizeInfo);
    })
  );

  useEffect(() => {
    const obsCurrent = observer.current;
    const elCurrent = elRef.current;

    if (elCurrent) {
      obsCurrent.observe(elRef.current);
    }

    return () => {
      obsCurrent.unobserve(elCurrent);
    };
  }, [elRef, observer]);
};

export default useSizeDetector;
