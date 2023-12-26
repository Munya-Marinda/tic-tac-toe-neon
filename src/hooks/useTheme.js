import { useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {}, []);
  return theme;
}
