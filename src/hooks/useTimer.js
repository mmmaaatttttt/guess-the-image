import { useRef, useEffect, useCallback } from "react";

const noop = () => {};

const useTimer = ({
  durationInMS = 10000,
  intervalInMS = 1000,
  onInterval = noop,
  onEnd = noop
}) => {
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);
  const initialTimeRef = useRef(null);

  const animate = useCallback(
    time => {
      if (initialTimeRef.current === null) {
        initialTimeRef.current = time;
        previousTimeRef.current = time;
      }
      const timeUp = time - initialTimeRef.current > durationInMS;
      const intervalUp = time - previousTimeRef.current > intervalInMS;
      if (!timeUp && intervalUp) {
        onInterval();
        previousTimeRef.current = time;
      }
      if (!timeUp) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        onInterval();
        onEnd();
      }
    },
    [onInterval, onEnd, durationInMS, intervalInMS]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);
};

export default useTimer;
