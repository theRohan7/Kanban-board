import React from 'react'
import { themes, useTheme } from '../context/ThemeContext'

function ThemeSwitcher() {
    const { themeName, setThemeName } = useTheme()
  return (
    <div className='theme-switcher' >
        {Object.keys(themes).map((name) => (
            <button
             key={name}
             onClick={setThemeName(name)}
             className={`${themeName === name ? 'activeTheme' : ''} 
             px-4 py-2 m-2 rounded 
             ${themes[name].buttonColor} 
             ${themes[name].textColor}` }
            >
                {name}
            </button>
        ))}
      
    </div>
  )
}

export default ThemeSwitcher
