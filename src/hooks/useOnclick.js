import { useEffect } from "react";

function useOnclick(ref) {
  useEffect(() => {
    const listener = () => {
      console.log(ref);
    };
    document.addEventListener("mousedown", listener);
  }, []);
}

export { useOnclick };
