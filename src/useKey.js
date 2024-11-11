import { useEffect } from "react";

export function useKey(key, cb) {
  useEffect(() => {
    function callBack(e) {
      if (e.key.toLowerCase() === key.toLowerCase()) cb();
    }

    document.addEventListener("keydown", callBack);

    return () => {
      document.removeEventListener("keydown", callBack);
    };
  }, [cb, key]);
}
