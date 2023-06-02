import { useState, useEffect } from "react";

interface IUseWindowDimensions {
  width: number | null;
  height: number | null;
}

export default function useWindowDimensions(): IUseWindowDimensions {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  function handleResize() {
    setWindowDimensions(getWindowDimensions());
  }

  const [windowDimensions, setWindowDimensions] =
    useState<IUseWindowDimensions>(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
    return undefined;
  }, [hasWindow]);

  return windowDimensions;
}
