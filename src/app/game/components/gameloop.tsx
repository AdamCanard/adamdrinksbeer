import { useEffect, useState } from "react";

export const useFrameTime = () => {
  const [frameTime, setFrameTime] = useState<number>();
  useEffect(() => {
    let frameId: number;
    const frame = (time: number) => {
      setFrameTime(time);
      frameId = requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
    return () => cancelAnimationFrame(frameId);
  }, []);
  if (frameTime) {
    return Math.round(frameTime / 1000);
  }
};
