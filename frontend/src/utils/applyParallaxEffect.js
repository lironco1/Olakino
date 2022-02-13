import { useEffect } from "react";

// Used when the user is scrolling through sections with full width image - only on big screen

function useParallaxEffect(pageHeader) {
  useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        if (pageHeader !== null && pageHeader.current !== null) {
          let windowScrollTop = window.pageYOffset / 3;
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        }
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
}

export default useParallaxEffect;
