import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext({
  theme: "light",
});

const useTheme = () => {
    return useContext(ThemeContext);
}

const ThemeProvider = ({ children }) => {
  const defaultTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider,useTheme };

// const useThemept = () => {
//     const defaultTheme = localStorage.getItem("theme") || "light";
//     const [theme, setTheme] = useState(defaultTheme);

//     useEffect(() => {
//         localStorage.setItem("theme", theme);
//         document.documentElement.setAttribute("data-theme", theme)
//     }, [theme]);

//     return {
//         theme,
//         setTheme
//     }
// }

// export default useThemept;
