import { useEffect } from "react";

const ScrollToTop = () => {
  // Every time the path changes (i.e. we load a new generator), we scroll to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [__dirname]);

  return null;
}

export default ScrollToTop;