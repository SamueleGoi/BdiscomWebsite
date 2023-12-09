import { useState, useEffect } from "react";

interface IUseWindowDimension {
  width: number | null;
  height: number | null;
}

export default function useWindowDimensions(): IUseWindowDimension {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState<IUseWindowDimension>(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize(): void {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}
