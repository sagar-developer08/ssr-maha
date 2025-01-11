import { useState, useEffect } from "react";
function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";
  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    if (hasWindow) {
      let handleResize = function() {
        setWindowDimensions(getWindowDimensions());
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);
  return windowDimensions;
}
export {
  useWindowDimensions as u
};
