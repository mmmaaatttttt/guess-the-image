import { useRef, useEffect, useCallback } from "react";

const noop = () => {};

const useTimer = ({
  intervalInMS = 1000,
  onInterval = noop,
}) => {
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);

  const animate = useCallback(
    time => {
      if (previousTimeRef.current === null) {
        previousTimeRef.current = time;
      }
      const intervalUp = time - previousTimeRef.current > intervalInMS;
      if (intervalUp) {
        onInterval();
        previousTimeRef.current = time;
      }
      requestRef.current = requestAnimationFrame(animate);
    },
    [onInterval, intervalInMS]
  );

  const cancel = useCallback(() => cancelAnimationFrame(requestRef.current), []);
  const start = useCallback(() => {
    previousTimeRef.current = null;
    requestRef.current = requestAnimationFrame(animate);
  }, [animate]);

  useEffect(() => {
    return cancel;
  }, [cancel]);

  return { cancel, start }
};

export default useTimer;
