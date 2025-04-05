import { useEffect, useState } from "react"


const useTheme = () => {
    
    const [theme, setTheme] = useState(()=>{
        const savedTheme = localStorage.getItem("theme");
        return savedTheme || "light";
    });
    useEffect(()=>{
        document.documentElement.classList.remove(theme === "light" ? "dark" : "light");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
    },[theme]);

    const toggleTheme = () => {
        const theme = localStorage.getItem("theme");
        const newTheme = theme === "light" ? "dark":"light";
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme)
    }

    return {theme, toggleTheme};
}

export default useTheme;