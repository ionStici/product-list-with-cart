import { useState, useEffect } from "react";

export function useMediaQuery(feature, value) {
  const [match, setMatch] = useState(
    window.matchMedia(`(${feature}: ${value})`).matches,
  );

  const handleChange = (e) => setMatch(e.matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(${feature}: ${value})`);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return match;
}
