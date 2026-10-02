import React from 'react';
import './DarkLight.css';
import { useTheme } from './useThemept';
// import useThemept from './useThemept';
function DarkLight() { 
    console.log("DarkLight component rendered");
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <>
        <div className="dark-light-container">
            <h1>Current Theme: {theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
        </>
    )

}
export default DarkLight;