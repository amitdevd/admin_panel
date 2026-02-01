import { useEffect, useState } from "react";
import { ThemeProvide } from "./theme";

const ThemeProviderWrapper = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    const html = document.documentElement;

    html.classList.remove("light", "dark");
    html.classList.add(themeMode);

    localStorage.setItem("theme", themeMode);

  }, [themeMode]);



  return (
    <ThemeProvide value={{ themeMode, lightTheme, darkTheme }}>
      {children}
    </ThemeProvide>
  );
};

export default ThemeProviderWrapper;
