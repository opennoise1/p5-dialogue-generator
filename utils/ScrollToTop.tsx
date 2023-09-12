import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Grabs the current path (i.e. /persona4)
  const { pathname } = useLocation();

  // Every time the path changes (i.e. we load a new generator), we scroll to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;