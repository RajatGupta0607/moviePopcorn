import { useRef } from "react";
import { useKey } from "./useKey";

export default function Search({ query, setQuery }) {
  const inpulEl = useRef(null);

  useKey("enter", () => {
    if (document.activeElement === inpulEl.current) return;

    setQuery("");
    inpulEl.current.focus();
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inpulEl}
    />
  );
}
