import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
  mode: "system",
  colorTheme: null,
  setMode: () => null,
  setColorTheme: () => null,
};

const ThemeProviderContext = createContext(initialState);

export function ThemeProvider({
  children,
  defaultMode = "system",
  defaultColorTheme = null,
  storageKeyMode = "vite-ui-mode",
  storageKeyColorTheme = "vite-ui-color-theme",
}) {
  const [mode, setMode] = useState(
    () => localStorage.getItem(storageKeyMode) || defaultMode
  );

  const [colorTheme, setColorTheme] = useState(
    () => localStorage.getItem(storageKeyColorTheme) || defaultColorTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // Set mode classes
    root.classList.remove("light", "dark");
    if (mode === "system") {
      const systemMode = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemMode);
    } else {
      root.classList.add(mode);
    }
  }, [mode]);

  useEffect(() => {
    const root = document.documentElement;

    // Apply color theme
    if (colorTheme) {
      root.setAttribute("data-theme", colorTheme);
    } else {
      root.removeAttribute("data-theme");
    }
  }, [colorTheme]);

  useEffect(() => {
    localStorage.setItem(storageKeyMode, mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem(storageKeyColorTheme, colorTheme);
  }, [colorTheme]);

  const value = {
    mode,
    colorTheme,
    setMode,
    setColorTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
