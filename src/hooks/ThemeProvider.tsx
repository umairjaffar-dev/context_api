import { createContext, useState } from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: (mode: string) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  function toggleTheme(mode: string) {
    setTheme(mode);
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
