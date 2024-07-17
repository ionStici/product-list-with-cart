import { createContext, useContext, useState, useEffect } from "react";

const MediaQueriesContext = createContext();

const mediaQueriesList = [
  { query: "(min-width: 768px)", key: "match768" },
  { query: "(min-width: 1052px)", key: "match1052" },
];

export default function MediaQueriesProvider({ children }) {
  const initialMatches = mediaQueriesList.reduce((acc, { query, key }) => {
    acc[key] = window.matchMedia(query).matches;
    return acc;
  }, {});

  const [matches, setMatches] = useState(initialMatches);

  useEffect(() => {
    const mediaQueries = mediaQueriesList.map(({ query }) => {
      return window.matchMedia(query);
    });

    const handleChange = (key) => (e) => {
      setMatches((prev) => ({ ...prev, [key]: e.matches }));
    };

    mediaQueries.forEach((mediaQuery, i) => {
      const { key } = mediaQueriesList[i];
      mediaQuery.addEventListener("change", handleChange(key));
    });

    return () => {
      mediaQueries.forEach((mediaQuery, i) => {
        const { key } = mediaQueriesList[i];
        mediaQuery.removeEventListener("change", handleChange(key));
      });
    };
  }, []);

  return (
    <MediaQueriesContext.Provider value={{ ...matches }}>
      {children}
    </MediaQueriesContext.Provider>
  );
}

export function useMediaQueries() {
  return useContext(MediaQueriesContext);
}
