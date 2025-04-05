import React from 'react'
import useTheme from '../hooks/useTheme'

const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme();
  return (
    <div>
        <button onClick={toggleTheme} className='theme-toggle-btn'>Toggle</button>
    </div>
  )
}

export default ThemeToggle