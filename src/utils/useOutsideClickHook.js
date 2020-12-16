import { useEffect } from "react";

const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOutsideClick;

/*
#usage

import useOutsideClick from "../../../../utils/useOutsideClickHook";

const containerRef = useRef();

useOutsideClick(containerRef, () => {
  console.log('clicked outside')
});

<div ref={containerRef}>123</div>
*/